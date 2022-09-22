export class TestUtils {
  static cySelector(selector: string): string {
    return `[data-cy="${selector}"]`;
  }
}
