import {add, subtract, multiply, divide} from "./calculate"

test('add 2 + 2 to = 4', () =>{
    expect(add(2,2)).toEqual(4)
})
test('add 4 - 2 to = 2', () =>{
    expect(subtract(4,2)).toEqual(2)
})
test('add 2 * 2 to = 4', () =>{
    expect(multiply(2,2)).toEqual(4)
})
test('add 10 / 2 to = 5', () =>{
    expect(divide(10,2)).toEqual(5)
})