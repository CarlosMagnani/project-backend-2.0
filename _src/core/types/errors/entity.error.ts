export class ParameterError extends Error {
    constructor(parameterName: string) {
      super(`Empty Parameter: ${parameterName}`);
      this.name = 'EmptyParameterError';
    }
  }