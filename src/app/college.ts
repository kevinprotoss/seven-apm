import * as numeral from 'numeral';

// Add locale support for USA, UK, and others
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

numeral.register('locale', 'en-gb', {
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
    symbol: '£'
  }
});

numeral.register('locale', 'it', {
  delimiters: {
    thousands: '.',
    decimal: ','
  },
  abbreviations: {
    thousand: 'mila',
    million: 'mil',
    billion: 'b',
    trillion: 't'
  },
  ordinal: function (number) {
    return 'º';
  },
  currency: {
    symbol: '€'
  }
});

numeral.register('locale', 'fr', {
  delimiters: {
    thousands: ' ',
    decimal: ','
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't'
  },
  ordinal : function (number) {
    return number === 1 ? 'er' : 'e';
  },
  currency: {
    symbol: '€'
  }
});

numeral.register('locale', 'fi', {
  delimiters: {
    thousands: ' ',
    decimal: ','
  },
  abbreviations: {
    thousand: 'k',
    million: 'M',
    billion: 'G',
    trillion: 'T'
  },
  ordinal: function (number) {
    return '.';
  },
  currency: {
    symbol: '€'
  }
});

numeral.register('locale', 'chs', {
  delimiters: {
    thousands: ',',
    decimal: '.'
  },
  abbreviations: {
    thousand: '千',
    million: '百万',
    billion: '十亿',
    trillion: '兆'
  },
  ordinal: function (number) {
    return '.';
  },
  currency: {
    symbol: '¥'
  }
});

numeral.register('locale', 'ja', {
  delimiters: {
    thousands: ',',
    decimal: '.'
  },
  abbreviations: {
    thousand: '千',
    million: '百万',
    billion: '十億',
    trillion: '兆'
  },
  ordinal: function (number) {
    return '.';
  },
  currency: {
    symbol: '¥'
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
    numeral.locale(this.currency);
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
  name: object;
  bannerUrl: string;
  thumbnailUrl: string;
  logoUrl: string;
  abstract: object;
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
    this.name = data.name;
    this.bannerUrl = data.bannerUrl;
    this.thumbnailUrl = data.thumbnailUrl;
    this.logoUrl = data.logoUrl;
    this.abstract = data.abstract;
    this.introduction = data.introduction;
    this.majors = data.majors.map(major => new Major(major));
    this.application = data.application;
    this.tuition = new Tuition(data.tuition);
  }
}
