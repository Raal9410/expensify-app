const add = (a, b) => a + b
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!` 

test('should add two numbers', () => {
    const result = add(3, 4)
    expect(result).toBe(7)
})

test('should generate greeting from name', () => {
    const greet = generateGreeting('Raul')
    expect(greet).toBe('Hello Raul!')
}
)
test('should generate greeting from no name', () => {
    const greet = generateGreeting()
    expect(greet).toBe('Hello Anonymous!')
})