import dateConverter from "./dateConverter";

test('DateConverter is working', () => {
    const input = '20/04/2004';
    const dateExpected = '2004-04-20';

    expect(dateConverter(input)).toBe(dateExpected);
});

test('January', () => {
    const input = '01/01/1970';
    const dateExpected = '1970-01-01';

    expect(dateConverter(input)).toBe(dateExpected);
});

test('December', () => {
    const input = '31/12/2037';
    const dateExpected = '2037-12-31';

    expect(dateConverter(input)).toBe(dateExpected);
});