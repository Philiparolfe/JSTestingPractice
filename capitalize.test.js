import capitalize from "./capitalize"

test('Capitalizes the first charachter in a string', () =>{
    expect(capitalize('foo')).toMatch('Foo')
})