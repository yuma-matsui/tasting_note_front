type InputOrSelect<T = 'input'> = T extends 'select' ? HTMLSelectElement : HTMLInputElement

export default InputOrSelect
