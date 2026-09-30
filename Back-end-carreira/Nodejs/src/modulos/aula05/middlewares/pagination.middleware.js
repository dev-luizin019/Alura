export function paginationMiddleware(req, res, next) {
  let { page = 1, limit = 10, sortField = "_id", sortOrder = -1 } = req.query;

  page = Math.max(1, parseInt(page, 10) || 1);
  limit = Math.max(1, parseInt(limit, 10) || 10);
  sortOrder = parseInt(sortOrder, 10) === 1 ? 1 : -1;

  req.pagination = {
    skip: (page - 1) * limit,
    limit,
    sort: { [sortField]: sortOrder },
    page,
  };
  next()
}
