import * as numeral from 'numeral';

// Add locale support for USA
numeral.register('locale', 'en-us', {
  delimiters: {
    thousands: ',',
    decimal: '.'
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't'
  },
  ordinal: function (number) {
    var b = number % 10;
    return (~~ (number % 100 / 10) === 1) ? 'th' :
        (b === 1) ? 'st' :
        (b === 2) ? 'nd' :
        (b === 3) ? 'rd' : 'th';
  },
  currency: {
    symbol: '$'
  }
});

class Major {
  id: string;
  name: string;
  degree: string;
  description: string;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.degree = data.degree;
    this.description = data.description;
  }
}

class Tuition {
  currency: string;
  fees: Array<{
    name: string,
    price: number
  }>;
  
  get formattedFees(): Array<{name: string, price: string}> {
    numeral.locale(this.currency);
    return this.fees.map((fee) => {
      return {
        name: fee.name,
        price: numeral(fee.price).format('$0,0.00')
      };
    });
  }

  get totalFee(): string {
    let totalFee = this.fees
      .map(fee => fee.price)
      .reduce((a, b) => a + b, 0);
    return numeral(totalFee).format('$0,0.00');
  }

  constructor(data: any) {
    this.currency = data.currency;
    this.fees = data.fees;
  }
}

export class College {
  id: string;
  country: string;
  introduction: string;
  majors: Array<Major>;
  application: object;
  tuition: Tuition;

  get bachelorMajors(): Array<Major> {
    return this.majors.filter(major => major.degree === 'bachelor');
  }

  get masterMajors(): Array<Major> {
    return this.majors.filter(major => major.degree === 'master');
  }
  
  get popularMajors(): Array<Major> {
    return this.masterMajors.slice(0, 3);
  }

  constructor(data: any) {
    this.id = data.id;
    this.country = data.country;
    this.introduction = data.introduction;
    this.majors = data.majors.map(major => new Major(major));
    this.application = data.application;
    this.tuition = new Tuition(data.tuition);
  }
}