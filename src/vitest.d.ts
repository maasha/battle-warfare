import '@testing-library/jest-dom';
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';
import type { VitestAssertion } from 'vitest';

declare module 'vitest' {
	interface Assertion<T = any> extends VitestAssertion<T>, TestingLibraryMatchers<T, void> {}
	interface AsymmetricMatchersContaining extends TestingLibraryMatchers<any, void> {}
}

