/// CUSTOM ERRORS ///

// When no WebLN provider is available
export class MissingProviderError extends Error {
  constructor(message: string) {
    super(message);
  }
}

// When the user rejects a request
export class RejectionError extends Error {
  constructor(message: string) {
    super(message);
  }
}

// When the node can't be connected to (i.e. the app did nothing wrong)
export class ConnectionError extends Error {
  constructor(message: string) {
    super(message);
  }
}

// The WebLN provider doesn't support this method
export class UnsupportedMethodError extends Error {
  constructor(message: string) {
    super(message);
  }
}

// The desired node couldn't be routed to
export class RoutingError extends Error {
  constructor(message: string) {
    super(message);
  }
}

// An argument passed was somehow invalid (e.g. malformed invoice)
export class InvalidDataError extends Error {
  constructor(message: string) {
    super(message);
  }
}

// Something broke in the WebLN provider internally, nothing to do with the app
export class InternalError extends Error {
  constructor(message: string) {
    super(message);
  }
}
