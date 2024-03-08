<div align="left">

[![Visit The new york times](./header.png)](https://developer.nytimes.com)

# [The new york times](https://developer.nytimes.com)<a id="the-new-york-times"></a>

The Books API provides information about book reviews and The New York Times Best Sellers lists.

## Best Sellers Lists Services<a id="best-sellers-lists-services"></a>
### List Names<a id="list-names"></a>
The lists/names service returns a list of all the NYT Best Sellers Lists.  Some lists are published weekly and others monthly.  The response includes when each list was first published and last published.

```
/lists/names.json
```

### List Data<a id="list-data"></a>

The lists/{date}/{name} service returns the books on the best sellers list for the specified date and list name.

```
/lists/2019-01-20/hardcover-fiction.json
```

Use "current" for {date} to get the latest list.
```
/lists/current/hardcover-fiction.json
```

## Book Reviews Services<a id="book-reviews-services"></a>

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

## Example Calls<a id="example-calls"></a>

```
https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yourkey
```

```
https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=yourkey
```


</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`nyt.list.getAllBestSellers`](#nytlistgetallbestsellers)
  * [`nyt.list.getBestSellers`](#nytlistgetbestsellers)
  * [`nyt.list.getBestSellersOverview`](#nytlistgetbestsellersoverview)
  * [`nyt.list.getByDate`](#nytlistgetbydate)
  * [`nyt.list.getHistory`](#nytlistgethistory)
  * [`nyt.list.getNames`](#nytlistgetnames)
  * [`nyt.review.getBookReviews`](#nytreviewgetbookreviews)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=The%20New%20York%20Times&serviceName=Books&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Nyt } from "nytimes-typescript-sdk";

const nyt = new Nyt({
  // Defining the base path is optional and defaults to https://api.nytimes.com/svc/books/v3
  // basePath: "https://api.nytimes.com/svc/books/v3",
  apiKey: "API_KEY",
});

const getAllBestSellersResponse = await nyt.list.getAllBestSellers({});

console.log(getAllBestSellersResponse);
```

## Reference<a id="reference"></a>


### `nyt.list.getAllBestSellers`<a id="nytlistgetallbestsellers"></a>

Get all books for all the Best Sellers lists for specified date.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllBestSellersResponse = await nyt.list.getAllBestSellers({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### publishedDate: `string`<a id="publisheddate-string"></a>

YYYY-MM-DD  The best-seller list publication date. You do not have to specify the exact date the list was published. The service will search forward (into the future) for the closest publication date to the date you specify. For example, a request for lists/overview/2013-05-22 will retrieve the list that was published on 05-26.  If you do not include a published date, the current week\'s best sellers lists will be returned.

#### 🔄 Return<a id="🔄-return"></a>

[OverviewResponse](./models/overview-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/full-overview.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nyt.list.getBestSellers`<a id="nytlistgetbestsellers"></a>

Get Best Sellers list.  If no date is provided returns the latest list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBestSellersResponse = await nyt.list.getBestSellers({
  list: "hardcover-fiction",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### list: `string`<a id="list-string"></a>

The name of the Times best sellers list (hardcover-fiction, paperback-nonfiction, ...). The /lists/names service returns all the list names. The encoded list names are lower case with hyphens instead of spaces (e.g. e-book-fiction, instead of E-Book Fiction).

##### bestsellersDate: `string`<a id="bestsellersdate-string"></a>

YYYY-MM-DD  The week-ending date for the sales reflected on list-name. Times best sellers lists are compiled using available book sale data. The bestsellers-date may be significantly earlier than published-date. For additional information, see the explanation at the bottom of any best-seller list page on NYTimes.com (example: Hardcover Fiction, published Dec. 5 but reflecting sales to Nov. 29).

##### publishedDate: `string`<a id="publisheddate-string"></a>

YYYY-MM-DD  The date the best sellers list was published on NYTimes.com (different than bestsellers-date).  Use \"current\" for latest list.

##### offset: `number`<a id="offset-number"></a>

Sets the starting point of the result set (0, 20, ...).  Used to paginate thru books if list has more than 20. Defaults to 0.  The num_results field indicates how many books are in the list.

#### 🔄 Return<a id="🔄-return"></a>

[ListGetBestSellersResponse](./models/list-get-best-sellers-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nyt.list.getBestSellersOverview`<a id="nytlistgetbestsellersoverview"></a>

Get top 5 books for all the Best Sellers lists for specified date.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBestSellersOverviewResponse = await nyt.list.getBestSellersOverview(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### publishedDate: `string`<a id="publisheddate-string"></a>

YYYY-MM-DD  The best-seller list publication date. You do not have to specify the exact date the list was published. The service will search forward (into the future) for the closest publication date to the date you specify. For example, a request for lists/overview/2013-05-22 will retrieve the list that was published on 05-26.  If you do not include a published date, the current week\'s best sellers lists will be returned.

#### 🔄 Return<a id="🔄-return"></a>

[OverviewResponse](./models/overview-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/overview.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nyt.list.getByDate`<a id="nytlistgetbydate"></a>

Get Best Sellers list by date.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByDateResponse = await nyt.list.getByDate({
  date: "current",
  list: "list_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### date: `string`<a id="date-string"></a>

YYYY-MM-DD or \"current\"  The date the best sellers list was published on NYTimes.com.  Use \"current\" to get latest list.

##### list: `string`<a id="list-string"></a>

Name of the Best Sellers List (e.g. hardcover-fiction). You can get the full list of names from the /lists/names.json service.

##### offset: `number`<a id="offset-number"></a>

Sets the starting point of the result set (0, 20, ...).  Used to paginate thru books if list has more than 20. Defaults to 0.  The num_results field indicates how many books are in the list.

#### 🔄 Return<a id="🔄-return"></a>

[ListGetByDateResponse](./models/list-get-by-date-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/{date}/{list}.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nyt.list.getHistory`<a id="nytlistgethistory"></a>

Get Best Sellers list history.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getHistoryResponse = await nyt.list.getHistory({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ageGroup: `string`<a id="agegroup-string"></a>

The target age group for the best seller.

##### author: `string`<a id="author-string"></a>

The author of the best seller. The author field does not include additional contributors (see Data Structure for more details about the author and contributor fields).  When searching the author field, you can specify any combination of first, middle and last names.  When sort-by is set to author, the results will be sorted by author\'s first name.

##### contributor: `string`<a id="contributor-string"></a>

The author of the best seller, as well as other contributors such as the illustrator (to search or sort by author name only, use author instead).  When searching, you can specify any combination of first, middle and last names of any of the contributors.  When sort-by is set to contributor, the results will be sorted by the first name of the first contributor listed.

##### isbn: `string`<a id="isbn-string"></a>

International Standard Book Number, 10 or 13 digits  A best seller may have both 10-digit and 13-digit ISBNs, and may have multiple ISBNs of each type. To search on multiple ISBNs, separate the ISBNs with semicolons (example: 9780446579933;0061374229).

##### offset: `number`<a id="offset-number"></a>

Sets the starting point of the result set (0, 20, ...).  Used to paginate thru results if there are more than 20. Defaults to 0. The num_results field indicates how many results there are total.

##### price: `string`<a id="price-string"></a>

The publisher\'s list price of the best seller, including decimal point.

##### publisher: `string`<a id="publisher-string"></a>

The standardized name of the publisher

##### title: `string`<a id="title-string"></a>

The title of the best seller  When searching, you can specify a portion of a title or a full title.

#### 🔄 Return<a id="🔄-return"></a>

[ListGetHistoryResponse](./models/list-get-history-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/best-sellers/history.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nyt.list.getNames`<a id="nytlistgetnames"></a>

Get Best Sellers list names.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getNamesResponse = await nyt.list.getNames();
```

#### 🔄 Return<a id="🔄-return"></a>

[ListGetNamesResponse](./models/list-get-names-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lists/names.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nyt.review.getBookReviews`<a id="nytreviewgetbookreviews"></a>

Get book reviews.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBookReviewsResponse = await nyt.review.getBookReviews({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### isbn: `number`<a id="isbn-number"></a>

Searching by ISBN is the recommended method. You can enter 10- or 13-digit ISBNs.

##### title: `string`<a id="title-string"></a>

You’ll need to enter the full title of the book. Spaces in the title will be converted into the characters %20.

##### author: `string`<a id="author-string"></a>

You’ll need to enter the author’s first and last name, separated by a space. This space will be converted into the characters %20.

#### 🔄 Return<a id="🔄-return"></a>

[ReviewGetBookReviewsResponse](./models/review-get-book-reviews-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/reviews.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
