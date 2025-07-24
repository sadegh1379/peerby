declare namespace Service {
  interface base {
    message?: string;
  }
  interface error {
    status: 'Failed';
    error?: {
      code?: string;
      message?: string;
    };
  }

  interface result<T> {
    status: 'DONE' | 'Failed';
    result: T & base;
    error?: {
      code?: string;
      message?: string;
    };
  }

  interface pagination<T> {
    total: number;
    page: number;
    limit: number;
    perPage: number;
    data: Array<T>;
  }

  type paginated<T> = result<pagination<T>>;

  interface paginatedParams {
    page: number;
    limit?: number;
    search?: string;
  }
}
