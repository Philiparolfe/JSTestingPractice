import reverseStr from './reverseString'

test('Returns string reversed', () => {
  expect(reverseStr('hello')).toMatch('olleh')
})