
describe("Payments test (with setup and tear-down)", function () {
  beforeAll(function () {
    let billAmtInput = document.getElementById('billAmt');
    let tipAmtInput = document.getElementById('tipAmt');
      billAmtInput.value = 150;
      tipAmtInput.value = 15;
      submitPaymentInfo();
      billAmtInput.value = 225;
      tipAmtInput.value = 75;
      submitPaymentInfo();
  });

  it('should post bill and tip amount in table', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(375);
      expect(sumPaymentTotal('tipAmt')).toEqual(90);
      expect(sumPaymentTotal('tipPercent')).toEqual(43);
  });

    it('should calculate tip percent', function () {
        expect(calculateTipPercent(500, 50)).toEqual(10);
        expect(calculateTipPercent(205, 33)).toEqual(16);
    })

    
    afterAll(function () {
        let summary = document.getElementById('paymentTable');
        summary.remove();
        let payments = document.getElementById('summaryTable');
        payments.lastElementChild.remove()
    })     

})
