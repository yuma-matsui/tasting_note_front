import { appearanceTestData, conclusionTestData, flavorTestData, tasteTestData } from '../../src/utils'

describe('テイスティングシートの記録', () => {
  describe('ログインしていない場合', () => {
    describe('テイスティングシートの設定フォーム', () => {
      beforeEach(() => {
        cy.visit('/tasting_sheets/new')
      })

      it('遷移時は"テイスティングをはじめる"ボタンがdisabled', () => {
        cy.contains('テイスティングをはじめる').should('be.disabled')
      })

      it('シート名、テイスティング時間を入力するとボタンがenabledになる', () => {
        cy.inputSettingForm('白')
        cy.contains('テイスティングをはじめる').should('be.enabled')
      })

      it('シート名を入力した後に入力を削除するとエラーメッセージが表示される', () => {
        cy.contains('シート名を入力してください').should('not.exist')
        cy.inputSettingForm('白')
        cy.contains('シート名').clear()
        cy.contains('シート名を入力してください').should('exist')
      })

      describe('ページ内のリンクをクリックした場合', () => {
        beforeEach(() => {
          cy.get('img[alt="Header Logo"]').click()
        })

        it('確認ダイアログが表示される', () => {
          cy.contains('編集途中ですがよろしいですか？').should('exist')
        })

        describe('確認ダイアログで"いいえを押した場合"', () => {
          it('ダイアログが非表示になる', () => {
            cy.contains('いいえ').click()
            cy.contains('編集途中ですがよろしいですか？').should('not.exist')
          })
        })

        describe('確認ダイアログで"はいを押した場合"', () => {
          it('トップページへ遷移する', () => {
            cy.contains('OK').click()
            cy.url().should('eq', 'http://localhost:3000/')
          })
        })
      })
    })

    describe('外観のフォーム', () => {
      beforeEach(() => {
        cy.stepToAppearanceForm()
      })

      it('戻るボタンは常にenabled', () => {
        cy.contains('戻る').should('be.enabled')
      })

      it('戻るボタンを押すと設定フォームが表示される', () => {
        cy.contains('戻る').click()
        cy.contains('テイスティングシートの設定').should('exist')
      })

      it('フォーム表示時、次へボタンはdisabled', () => {
        cy.contains('次へ').should('be.disabled')
      })

      describe('次へボタンのdisabled', () => {
        beforeEach(() => {
          cy.checkAppearanceForm(appearanceTestData)
        })

        describe('入力が正常に行われた場合', () => {
          it('次へボタンがenabledになる', () => {
            cy.contains('次へ').should('be.enabled')
          })
        })

        describe('入力が不正な場合', () => {
          describe('色調が2つ選択されていない場合', () => {
            it('次へボタンはdisabled', () => {
              cy.contains(appearanceTestData.appearanceColors[0]).click()
              cy.contains('次へ').should('be.disabled')
            })
          })

          describe('外観の印象が2つ選択されていない場合', () => {
            it('次へボタンはdisabled', () => {
              cy.contains(appearanceTestData.appearanceImpressions[0]).click()
              cy.contains('次へ').should('be.disabled')
            })
          })
        })
      })

      describe('次へボタンを押した場合', () => {
        beforeEach(() => {
          cy.checkAppearanceForm(appearanceTestData)
        })

        it('香りのフォームが表示される', () => {
          cy.contains('次へ').click()
          cy.get('h2').should('have.text', '香り')
        })
      })
    })

    describe('香りのフォーム', () => {
      beforeEach(() => {
        cy.stepToFlavorForm()
      })

      describe('次へ、戻るボタンのdisabled', () => {
        it('表示時、次へ、戻るボタンがdisabled', () => {
          cy.contains('次へ').should('be.disabled')
          cy.contains('戻る').should('be.disabled')
        })

        describe('入力が正常な場合', () => {
          beforeEach(() => {
            cy.checkFlavorForm(flavorTestData)
          })

          it('次へ、戻るボタンがenabledになる', () => {
            cy.contains('次へ').should('be.enabled')
            cy.contains('戻る').should('be.enabled')
          })
        })

        describe('入力が不正な場合', () => {
          beforeEach(() => {
            cy.checkFlavorForm(flavorTestData)
          })

          describe('第一印象が1つしか選択されていない場合', () => {
            beforeEach(() => {
              cy.contains(flavorTestData.flavorFirstImpressions[0]).click()
            })

            it('次へ、戻るボタンがdisabledになる', () => {
              cy.contains('次へ').should('be.disabled')
              cy.contains('戻る').should('be.disabled')
            })
          })

          describe('果実が1つしか選択されていない場合', () => {
            beforeEach(() => {
              cy.contains(flavorTestData.flavorFruits[0]).click()
            })

            it('次へ、戻るボタンがdisabledになる', () => {
              cy.contains('次へ').should('be.disabled')
              cy.contains('戻る').should('be.disabled')
            })
          })

          describe('花・植物が1つしか選択されていない場合', () => {
            beforeEach(() => {
              cy.contains(flavorTestData.flavorFlowers[0]).click()
            })

            it('次へ、戻るボタンがdisabledになる', () => {
              cy.contains('次へ').should('be.disabled')
              cy.contains('戻る').should('be.disabled')
            })
          })

          describe('香辛料・芳香・化学物質が1つしか選択されていない場合', () => {
            beforeEach(() => {
              cy.contains(flavorTestData.flavorSpices[0]).click()
            })

            it('次へ、戻るボタンがdisabledになる', () => {
              cy.contains('次へ').should('be.disabled')
              cy.contains('戻る').should('be.disabled')
            })
          })

          describe('香りの印象が1つしか選択されていない場合', () => {
            beforeEach(() => {
              cy.contains(flavorTestData.flavorImpressions[0]).click()
            })

            it('次へ、戻るボタンがdisabledになる', () => {
              cy.contains('次へ').should('be.disabled')
              cy.contains('戻る').should('be.disabled')
            })
          })
        })
      })

      describe('戻るボタンを押した場合', () => {
        beforeEach(() => {
          cy.checkFlavorForm(flavorTestData)
          cy.contains('戻る').click()
        })

        it('外観フォームが表示される', () => {
          cy.get('h2').should('have.text', '外観')
        })
      })

      describe('次へボタンを押した場合', () => {
        beforeEach(() => {
          cy.checkFlavorForm(flavorTestData)
          cy.contains('次へ').click()
        })

        it('味わいフォームが表示される', () => {
          cy.get('h2').should('have.text', '味わい')
        })
      })
    })

    describe('味わいのフォーム', () => {
      beforeEach(() => {
        cy.stepToTasteForm()
      })

      describe('次へ、戻るボタンのdisabled', () => {
        it('表示時、次へ、戻るボタンがdisabled', () => {
          cy.contains('次へ').should('be.disabled')
          cy.contains('戻る').should('be.disabled')
        })

        describe('入力が正常な場合', () => {
          beforeEach(() => {
            cy.checkTasteForm(tasteTestData)
          })

          it('次へ、戻るボタンがenabledになる', () => {
            cy.contains('次へ').should('be.enabled')
            cy.contains('戻る').should('be.enabled')
          })
        })
      })

      describe('戻るボタンを押した場合', () => {
        beforeEach(() => {
          cy.checkTasteForm(tasteTestData)
          cy.contains('戻る').click()
        })

        it('香りフォームが表示される', () => {
          cy.get('h2').should('have.text', '香り')
        })
      })

      describe('次へボタンを押した場合', () => {
        beforeEach(() => {
          cy.checkTasteForm(tasteTestData)
          cy.contains('次へ').click()
        })

        it('まとめフォームが表示される', () => {
          cy.get('h2').should('have.text', 'まとめ')
        })
      })
    })

    describe('まとめのフォーム', () => {
      beforeEach(() => {
        cy.stepToConclusionForm()
      })

      describe('回答確認、戻るボタンのdisabled', () => {
        it('表示時、回答確認、戻るボタンがdisabled', () => {
          cy.contains('回答確認').should('be.disabled')
          cy.contains('戻る').should('be.disabled')
        })

        describe('入力が正常な場合', () => {
          beforeEach(() => {
            cy.checkConclusionForm(conclusionTestData)
          })

          it('回答確認、戻るボタンがenabledになる', () => {
            cy.contains('回答確認').should('be.enabled')
            cy.contains('戻る').should('be.enabled')
          })
        })
      })

      describe('戻るボタンを押した場合', () => {
        beforeEach(() => {
          cy.checkConclusionForm(conclusionTestData)
          cy.contains('戻る').click()
        })

        it('味わいフォームが表示される', () => {
          cy.get('h2').should('have.text', '味わい')
        })
      })

      describe('回答確認ボタンを押した場合', () => {
        beforeEach(() => {
          cy.checkConclusionForm(conclusionTestData)
          cy.contains('回答確認').click()
        })

        it('あなたの回答が表示される', () => {
          cy.get('h2').should('have.text', 'あなたの回答')
        })
      })
    })

    describe('回答確認タブ', () => {
      beforeEach(() => {
        cy.stepToConfirmationTab()
      })

      describe('表示された時', () => {
        it('外観のタブが選択されている', () => {
          cy.get('button.tab-active').should('have.text', '外観')
        })

        it('外観に関するリストが表示されている', () => {
          cy.contains('清澄度').should('exist')
        })
      })

      describe('香りのタブがクリックされた時', () => {
        beforeEach(() => {
          cy.contains('香り').click()
        })

        it('香りのタブが選択されている', () => {
          cy.get('button.tab-active').should('have.text', '香り')
        })

        it('香りに関するリストが表示されている', () => {
          cy.contains('香りの印象').should('exist')
        })
      })

      describe('味わいのタブがクリックされた時', () => {
        beforeEach(() => {
          cy.contains('味わい').click()
        })

        it('味わいのタブが選択されている', () => {
          cy.get('button.tab-active').should('have.text', '味わい')
        })

        it('味わいに関するリストが表示されている', () => {
          cy.contains('アタック').should('exist')
        })
      })

      describe('まとめのタブがクリックされた時', () => {
        beforeEach(() => {
          cy.contains('まとめ').click()
        })

        it('まとめのタブが選択されている', () => {
          cy.get('button.tab-active').should('have.text', 'まとめ')
        })

        it('まとめに関するリストが表示されている', () => {
          cy.contains('評価').should('exist')
        })
      })

      describe('戻るボタン', () => {
        it('常にenabled', () => {
          cy.contains('戻る').should('be.enabled')
        })

        it('クリックするとまとめのフォームを表示する', () => {
          cy.contains('戻る').click()
          cy.get('h2').should('have.text', 'まとめ')
        })
      })

      describe('記録するボタン', () => {
        it('常にenabledになっている', () => {
          cy.contains('記録する').should('be.enabled')
        })

        it('クリックすると確認ダイアログが表示される', () => {
          cy.contains('記録する').click()
          cy.contains('サインアップまたはログインを行います').should('exist')
        })

        describe('ダイアログ内のボタンのクリック', () => {
          beforeEach(() => {
            cy.contains('記録する').click()
          })

          describe('サインアップボタンを押した場合', () => {
            it('サインアップページに遷移する', () => {
              cy.get('a[href="/signup"]').click()
              cy.url().should('include', '/signup')
              cy.get('h2').should('have.text', 'サインアップ')
            })
          })

          describe('ログインボタンを押した場合', () => {
            it('ログインページに遷移する', () => {
              cy.get('a[href="/signin"]').click()
              cy.url().should('include', '/signin')
              cy.get('h2').should('have.text', 'ログイン')
            })
          })
        })
      })

      describe('記録せずに終了するリンク', () => {
        it('クリックすると確認ダイアログが表示される', () => {
          cy.contains('記録せずに終了する').click()
          cy.contains('このまま記録せずに終了しますがよろしいですか？').should('exist')
        })

        describe('確認ダイアログ内のボタンのクリック', () => {
          beforeEach(() => {
            cy.contains('記録せずに終了する').click()
          })

          describe('いいえを押した場合', () => {
            beforeEach(() => {
              cy.contains('いいえ').click()
            })

            it('ダイアログが非表示になる', () => {
              cy.contains('このまま記録せずに終了しますがよろしいですか？').should('not.exist')
            })

            it('あなたの回答が表示されている', () => {
              cy.get('h2').should('have.text', 'あなたの回答')
            })
          })

          describe('はいを押した場合', () => {
            it('トップページに遷移する', () => {
              cy.contains('はい').click()
              cy.url().should('eq', 'http://localhost:3000/')
              cy.get('h1').should('have.text', 'Tasting Note')
            })
          })
        })
      })
    })
  })
})
