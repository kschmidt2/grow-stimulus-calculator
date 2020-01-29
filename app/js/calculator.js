  var calculator = new Vue({
    el: '#calculator',
    data: {
      principal: 5000,
      frequency:1,
      contribution: 100,
      yearsToGrow: 10,
      interestRate: 7,
      totalPrincipal: '',
      totalReturn: ''

    },
    computed: {
        getResults: function () {
            let P = this.principal,
                r = this.interestRate/100,
                n = this.frequency,
                t = this.yearsToGrow,
                PMT = this.contribution,
                fvOfPrincipal,
                fvOfContributions;
    
            fvOfPrincipal = P * Math.pow(1+(r/n),n*t);

            console.log(fvOfPrincipal)

            fvOfContributions = PMT * (Math.pow(1+(r/n),n*t) - 1)/(r/n);

            console.log(fvOfContributions);

            futureBalance = fvOfPrincipal + fvOfContributions;

            futureBalance = futureBalance.toLocaleString(undefined,
                {'minimumFractionDigits':0,'maximumFractionDigits':0});
    
            return futureBalance;
          }
    },
    methods: {
      // functions go here
    }
  })