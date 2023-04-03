export class EmptyRequireParameter extends Error {
    constructor(parameterName: string) {
      super(`Empty Parameter: ${parameterName}`);
      this.name = 'EmptyParameterError';
    }
  }


  export class DateParameter extends Error {
    constructor(parameterName: string){
      super(`Date parameter error ${parameterName}`);
      this.name = 'DateParameterError';
    }
  }