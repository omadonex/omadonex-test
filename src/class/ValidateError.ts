export class ValidateError {
  private rule: string;
  constructor(rule: string) {
    this.rule = rule;
  }

  print(): void {
    alert(this.rule);
  }
}
