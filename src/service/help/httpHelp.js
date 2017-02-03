
function isSuccessful(response) {
    response = response || {};
    if (!response.statusCode || response.statusCode<200 || response.statusCode>=300) {
        return false;
    } else {
        return true;
    }
}


/**
 *  the search result is stored in body.hits.hits (which is an array)
 *
 * @param body
 */
function getSearchResult(body) {
    body = body || {};
    body.hits= body.hits || {};
    var hits = body.hits.hits || [];

    return hits.map(s => s._source) || [];
}

module.exports = {
    isSuccessful: isSuccessful,
    getSearchResult: getSearchResult
};