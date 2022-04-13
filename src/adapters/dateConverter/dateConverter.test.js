import { dateConverter, dateConverterToService } from "./dateConverter";

// tests for dateConverter function

test('dateConverter is working', () => {
    const input = '20/04/2004';
    const dateExpected = '2004-04-20';

    expect(dateConverter(input)).toBe(dateExpected);
});

test('January dateConverter', () => {
    const input = '01/01/1970';
    const dateExpected = '1970-01-01';

    expect(dateConverter(input)).toBe(dateExpected);
});

test('December dateConverter', () => {
    const input = '31/12/2037';
    const dateExpected = '2037-12-31';

    expect(dateConverter(input)).toBe(dateExpected);
});

test('January without 0s on month dateConverter', () => {
    const input = '10/1/1970';
    const dateExpected = '1970-01-10';

    expect(dateConverter(input)).toBe(dateExpected);
});

test('January without 0s on day dateConverter', () => {
    const input = '1/10/1970';
    const dateExpected = '1970-10-01';

    expect(dateConverter(input)).toBe(dateExpected);
});

// tests for dateConverterToService function

test('dateConverterToService is working', () => {
    const input = '2022-04-12';
    const dateExpected = '12/04/2022';

    expect(dateConverterToService(input)).toBe(dateExpected);
})


test('January dateConverterToService', () => {
    const input = '1970-01-01';
    const dateExpected = '01/01/1970';

    expect(dateConverterToService(input)).toBe(dateExpected);
});


test('December dateConverterToService', () => {
    const input = '2037-12-31';
    const dateExpected = '31/12/2037';
    
    expect(dateConverterToService(input)).toBe(dateExpected);
});

test('January without 0s on month dateConverterToService', () => {
    const input = '1970-1-10';
    const dateExpected = '10/01/1970';

    expect(dateConverterToService(input)).toBe(dateExpected);
});

test('January without 0s on day dateConverterToService', () => {
    const input = '1970-10-1';
    const dateExpected = '01/10/1970';

    expect(dateConverterToService(input)).toBe(dateExpected);
});