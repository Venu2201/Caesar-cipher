import {
    ceaserSpec
} from "./main"


describe('MyTest', () => {

    let expected = "HIJK";
    var input = "ABCD";
    var amount = 7;

    it('equals expected', () => {
        expect(ceaserSpec(input,amount))
            .toEqual(expected);
    });

    // it('not equals expected', () => {
    //     expect(ceaserSpec(input,amount))
    //         .not.toEqual(expected);
    // });

    it('input is not undefined', () => {
        expect(ceaserSpec(input,amount))
            .not.toBe(undefined);
    });

    it('input should not be null', () => {
        expect(ceaserSpec(input,amount))
            .not.toBe(null);
    });
});