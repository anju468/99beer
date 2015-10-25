describe('beer', function() {
  it("will return false if input is 0", function() {
    expect(beer(0)).to.equal("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
  });

  it("will return second last line of 99 beer when 1 is input", function() {
    expect(beer(1)).to.equal("1 bottle of beer on the wall, 1 bottle of beer. Take it down and pass it around, no more bottles of beer on the wall.");
  });

});
