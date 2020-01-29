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
                totalContributions,
                fvOfPrincipal,
                fvOfContributions,
                totalReturn,
                totalInvestment,
                combined,
                iData = [];
                rData = [];

            totalContributions = P + (PMT*t);
    
            // fvOfPrincipal = P * Math.pow(1+(r/n),n*t);

            fvOfPrincipal = P;
            fvOfContributions = 0;

            for (i=0; i<n*t; i++) {
                fvOfPrincipal = fvOfPrincipal*(1+r/n);
                fvOfContributions = fvOfContributions*(1+r/n)+PMT;
                totalInvestment = PMT*(i+1) + P;
                combined = fvOfPrincipal + fvOfContributions;
                totalReturn = combined - totalInvestment;
                iData.push(totalInvestment);
                rData.push(totalReturn);
            }

            console.log(iData);
            console.log(rData);

            // fvOfContributions = PMT * (Math.pow(1+(r/n),n*t) - 1)/(r/n);

            futureBalance = fvOfPrincipal + fvOfContributions;

            totalReturn = futureBalance - totalContributions;

            futureBalance = futureBalance.toLocaleString(undefined,
                {'minimumFractionDigits':0,'maximumFractionDigits':0});
    
            return futureBalance;
          }
    },
    methods: {
      // functions go here
    }
  })