/*
Books API

The Books API provides information about book reviews and The New York Times Best Sellers lists.

## Best Sellers Lists Services
### List Names
The lists/names service returns a list of all the NYT Best Sellers Lists.  Some lists are published weekly and others monthly.  The response includes when each list was first published and last published.

```
/lists/names.json
```

### List Data

The lists/{date}/{name} service returns the books on the best sellers list for the specified date and list name.

```
/lists/2019-01-20/hardcover-fiction.json
```

Use \"current\" for {date} to get the latest list.
```
/lists/current/hardcover-fiction.json
```

## Book Reviews Services

The book reviews service lets you get NYT book review by author, ISBN, or title.

```
/reviews.json?author=Michelle+Obama
```

```
/reviews.json?isbn=9781524763138
```

```
/reviews.json?title=Becoming
```

## Example Calls

```
https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yourkey
```

```
https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=yourkey
```


The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface OverviewResponseResultsListsInnerBooksInner
 */
export interface OverviewResponseResultsListsInnerBooksInner {
    /**
     * 
     * @type {string}
     * @memberof OverviewResponseResultsListsInnerBooksInner
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof OverviewResponseResultsListsInnerBooksInner
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof OverviewResponseResultsListsInnerBooksInner
     */
    'age_group'?: string;
    /**
     * 
     * @type {string}
     * @memberof OverviewResponseResultsListsInnerBooksInner
     */
    'author'?: string;
    /**
     * 
     * @type {string}
     * @memberof OverviewResponseResultsListsInnerBooksInner
     */
    'contributor'?: string;
    /**
     * 
     * @type {string}
     * @memberof OverviewResponseResultsListsInnerBooksInner
     */
    'contributor_note'?: string;
    /**
     * 
     * @type {string}
     * @memberof OverviewResponseResultsListsInnerBooksInner
     */
    'created_date'?: string;
    /**
     * 
     * @type {number}
     * @memberof OverviewResponseResultsListsInnerBooksInner
     */
    'price'?: number;
    /**
     * 
     * @type {string}
     * @memberof OverviewResponseResultsListsInnerBooksInner
     */
    'primary_isbn13'?: string;
    /**
     * 
     * @type {string}
     * @memberof OverviewResponseResultsListsInnerBooksInner
     */
    'primary_isbn10'?: string;
    /**
     * 
     * @type {string}
     * @memberof OverviewResponseResultsListsInnerBooksInner
     */
    'publisher'?: string;
    /**
     * 
     * @type {number}
     * @memberof OverviewResponseResultsListsInnerBooksInner
     */
    'rank'?: number;
    /**
     * 
     * @type {string}
     * @memberof OverviewResponseResultsListsInnerBooksInner
     */
    'updated_date'?: string;
}
