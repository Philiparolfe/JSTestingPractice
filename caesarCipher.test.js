import caesarCipher from './caesarCipher'

test('Punctuation Test', () =>{
    expect(caesarCipher('Hello, World!', 5)).toEqual('Mjqqt, Btwqi!')
})

test('Character case test', () =>{
    expect(caesarCipher('HelloWorld', 5)).toEqual('MjqqtBtwqi')
})

test('z to a wrap test', () =>{
    expect(caesarCipher('Z', 2)).toEqual('B')
})