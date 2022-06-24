describe("Check different things", function() {
    it('should add values in array', function() {
        expect(add_nums([1, 2, 3, 4, 5])).toEqual(15);
    });

    it('should handle datatype exceptions', function () {
        expect(add_nums(5)).toEqual(5);
        expect(add_nums('Five')).toEqual('Invalid Input');  
    });
});

