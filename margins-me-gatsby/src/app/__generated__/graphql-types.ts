import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any;
  /** A point in time as described by the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone. */
  Datetime: any;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** A JavaScript object encoded in the JSON format as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The day, does not include a time. */
  Date: any;
  FullText: any;
};

export type Account = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
  accountId: Scalars['UUID'];
  email: Scalars['String'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  status?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  group?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `Publication`. */
  publicationsByAccountId: PublicationsConnection;
  /** Reads and enables pagination through a set of `Annotation`. */
  annotationsByAccountId: AnnotationsConnection;
  /** Reads and enables pagination through a set of `Author`. */
  authorsByAccountId: AuthorsConnection;
  /** Reads and enables pagination through a set of `Tag`. */
  tagsByAccountId: TagsConnection;
  fullName?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `Publication`. */
  publicationsByAnnotationAccountIdAndPublicationId: AccountPublicationsByAnnotationAccountIdAndPublicationIdManyToManyConnection;
};


export type AccountPublicationsByAccountIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PublicationsOrderBy>>;
  condition?: Maybe<PublicationCondition>;
  filter?: Maybe<PublicationFilter>;
};


export type AccountAnnotationsByAccountIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AnnotationsOrderBy>>;
  condition?: Maybe<AnnotationCondition>;
  filter?: Maybe<AnnotationFilter>;
};


export type AccountAuthorsByAccountIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AuthorsOrderBy>>;
  condition?: Maybe<AuthorCondition>;
  filter?: Maybe<AuthorFilter>;
};


export type AccountTagsByAccountIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TagsOrderBy>>;
  condition?: Maybe<TagCondition>;
  filter?: Maybe<TagFilter>;
};


export type AccountPublicationsByAnnotationAccountIdAndPublicationIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PublicationsOrderBy>>;
  condition?: Maybe<PublicationCondition>;
  filter?: Maybe<PublicationFilter>;
};

/** The fields on `account` to look up the row to connect. */
export type AccountAccountEmailKeyConnect = {
  email: Scalars['String'];
};

/** The fields on `account` to look up the row to delete. */
export type AccountAccountEmailKeyDelete = {
  email: Scalars['String'];
};

/** The fields on `account` to look up the row to connect. */
export type AccountAccountPkeyConnect = {
  accountId: Scalars['UUID'];
};

/** The fields on `account` to look up the row to delete. */
export type AccountAccountPkeyDelete = {
  accountId: Scalars['UUID'];
};

/** A condition to be used against `Account` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AccountCondition = {
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `email` field. */
  email?: Maybe<Scalars['String']>;
};

/** A filter to be used against `Account` object types. All fields are combined with a logical ‘and.’ */
export type AccountFilter = {
  /** Filter by the object’s `accountId` field. */
  accountId?: Maybe<UuidFilter>;
  /** Filter by the object’s `email` field. */
  email?: Maybe<StringFilter>;
  /** Filter by the object’s `fullName` field. */
  fullName?: Maybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<AccountFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<AccountFilter>>;
  /** Negates the expression. */
  not?: Maybe<AccountFilter>;
};

/** An input for mutations affecting `Account` */
export type AccountInput = {
  accountId: Scalars['UUID'];
  email: Scalars['String'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  status?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  group?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  publicationsUsingAccountId?: Maybe<PublicationAccountIdFkeyInverseInput>;
  annotationsUsingAccountId?: Maybe<AnnotationAccountIdFkeyInverseInput>;
  authorsUsingAccountId?: Maybe<AuthorAccountIdFkeyInverseInput>;
  tagsUsingAccountId?: Maybe<TagAccountIdFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type AccountNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `account` to be connected. */
  id: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type AccountNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `account` to be deleted. */
  id: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type AccountOnAnnotationForAnnotationAccountIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `annotation` to be connected. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `annotation` being updated. */
  annotationPatch: AnnotationPatch;
};

/** The fields on `account` to look up the row to update. */
export type AccountOnAnnotationForAnnotationAccountIdFkeyUsingAccountEmailKeyUpdate = {
  /** An object where the defined keys will be set on the `account` being updated. */
  accountPatch: UpdateAccountOnAnnotationForAnnotationAccountIdFkeyPatch;
  email: Scalars['String'];
};

/** The fields on `account` to look up the row to update. */
export type AccountOnAnnotationForAnnotationAccountIdFkeyUsingAccountPkeyUpdate = {
  /** An object where the defined keys will be set on the `account` being updated. */
  accountPatch: UpdateAccountOnAnnotationForAnnotationAccountIdFkeyPatch;
  accountId: Scalars['UUID'];
};

/** The globally unique `ID` look up for the row to update. */
export type AccountOnAuthorForAuthorAccountIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `author` to be connected. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `author` being updated. */
  authorPatch: AuthorPatch;
};

/** The fields on `account` to look up the row to update. */
export type AccountOnAuthorForAuthorAccountIdFkeyUsingAccountEmailKeyUpdate = {
  /** An object where the defined keys will be set on the `account` being updated. */
  accountPatch: UpdateAccountOnAuthorForAuthorAccountIdFkeyPatch;
  email: Scalars['String'];
};

/** The fields on `account` to look up the row to update. */
export type AccountOnAuthorForAuthorAccountIdFkeyUsingAccountPkeyUpdate = {
  /** An object where the defined keys will be set on the `account` being updated. */
  accountPatch: UpdateAccountOnAuthorForAuthorAccountIdFkeyPatch;
  accountId: Scalars['UUID'];
};

/** The globally unique `ID` look up for the row to update. */
export type AccountOnPublicationForPublicationAccountIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `publication` to be connected. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `publication` being updated. */
  publicationPatch: PublicationPatch;
};

/** The fields on `account` to look up the row to update. */
export type AccountOnPublicationForPublicationAccountIdFkeyUsingAccountEmailKeyUpdate = {
  /** An object where the defined keys will be set on the `account` being updated. */
  accountPatch: UpdateAccountOnPublicationForPublicationAccountIdFkeyPatch;
  email: Scalars['String'];
};

/** The fields on `account` to look up the row to update. */
export type AccountOnPublicationForPublicationAccountIdFkeyUsingAccountPkeyUpdate = {
  /** An object where the defined keys will be set on the `account` being updated. */
  accountPatch: UpdateAccountOnPublicationForPublicationAccountIdFkeyPatch;
  accountId: Scalars['UUID'];
};

/** The globally unique `ID` look up for the row to update. */
export type AccountOnTagForTagAccountIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `tag` to be connected. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `tag` being updated. */
  tagPatch: TagPatch;
};

/** The fields on `account` to look up the row to update. */
export type AccountOnTagForTagAccountIdFkeyUsingAccountEmailKeyUpdate = {
  /** An object where the defined keys will be set on the `account` being updated. */
  accountPatch: UpdateAccountOnTagForTagAccountIdFkeyPatch;
  email: Scalars['String'];
};

/** The fields on `account` to look up the row to update. */
export type AccountOnTagForTagAccountIdFkeyUsingAccountPkeyUpdate = {
  /** An object where the defined keys will be set on the `account` being updated. */
  accountPatch: UpdateAccountOnTagForTagAccountIdFkeyPatch;
  accountId: Scalars['UUID'];
};

/** Represents an update to a `Account`. Fields that are set will be updated. */
export type AccountPatch = {
  accountId?: Maybe<Scalars['UUID']>;
  email?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  status?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  group?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  publicationsUsingAccountId?: Maybe<PublicationAccountIdFkeyInverseInput>;
  annotationsUsingAccountId?: Maybe<AnnotationAccountIdFkeyInverseInput>;
  authorsUsingAccountId?: Maybe<AuthorAccountIdFkeyInverseInput>;
  tagsUsingAccountId?: Maybe<TagAccountIdFkeyInverseInput>;
};

/** A connection to a list of `Publication` values, with data from `Annotation`. */
export type AccountPublicationsByAnnotationAccountIdAndPublicationIdManyToManyConnection = {
  /** A list of `Publication` objects. */
  nodes: Array<Maybe<Publication>>;
  /** A list of edges which contains the `Publication`, info from the `Annotation`, and the cursor to aid in pagination. */
  edges: Array<AccountPublicationsByAnnotationAccountIdAndPublicationIdManyToManyEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Publication` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Publication` edge in the connection, with data from `Annotation`. */
export type AccountPublicationsByAnnotationAccountIdAndPublicationIdManyToManyEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Publication` at the end of the edge. */
  node?: Maybe<Publication>;
  /** Reads and enables pagination through a set of `Annotation`. */
  annotationsByPublicationId: AnnotationsConnection;
};


/** A `Publication` edge in the connection, with data from `Annotation`. */
export type AccountPublicationsByAnnotationAccountIdAndPublicationIdManyToManyEdgeAnnotationsByPublicationIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AnnotationsOrderBy>>;
  condition?: Maybe<AnnotationCondition>;
  filter?: Maybe<AnnotationFilter>;
};

/** A connection to a list of `Account` values. */
export type AccountsConnection = {
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** A list of edges which contains the `Account` and cursor to aid in pagination. */
  edges: Array<AccountsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Account` edge in the connection. */
export type AccountsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};

/** Methods to use when ordering `Account`. */
export enum AccountsOrderBy {
  Natural = 'NATURAL',
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type AccountTagAnnotation = {
  accountId?: Maybe<Scalars['UUID']>;
  annotationId?: Maybe<Scalars['String']>;
  tagId?: Maybe<Scalars['String']>;
};

/** A connection to a list of `AccountTagAnnotation` values. */
export type AccountTagAnnotationsConnection = {
  /** A list of `AccountTagAnnotation` objects. */
  nodes: Array<Maybe<AccountTagAnnotation>>;
  /** A list of edges which contains the `AccountTagAnnotation` and cursor to aid in pagination. */
  edges: Array<AccountTagAnnotationsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `AccountTagAnnotation` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `AccountTagAnnotation` edge in the connection. */
export type AccountTagAnnotationsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `AccountTagAnnotation` at the end of the edge. */
  node?: Maybe<AccountTagAnnotation>;
};

/** Methods to use when ordering `AccountTagAnnotation`. */
export enum AccountTagAnnotationsOrderBy {
  Natural = 'NATURAL'
}

export type Annotation = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
  annotationId: Scalars['String'];
  publicationId: Scalars['String'];
  accountId: Scalars['UUID'];
  color?: Maybe<Scalars['String']>;
  highlightLocation?: Maybe<Scalars['JSON']>;
  highlightText?: Maybe<Scalars['String']>;
  noteText?: Maybe<Scalars['String']>;
  noteLocation?: Maybe<Scalars['JSON']>;
  recordedAt?: Maybe<Scalars['Datetime']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  editedHighlightText?: Maybe<Scalars['String']>;
  extraEdits?: Maybe<Scalars['JSON']>;
  tsv?: Maybe<Scalars['FullText']>;
  /** Reads a single `Publication` that is related to this `Annotation`. */
  publicationByPublicationId?: Maybe<Publication>;
  /** Reads a single `Account` that is related to this `Annotation`. */
  accountByAccountId?: Maybe<Account>;
  /** Reads and enables pagination through a set of `AnnotationTag`. */
  annotationTagsByAnnotationId: AnnotationTagsConnection;
  /** Reads and enables pagination through a set of `Tag`. */
  tagsByAnnotationTagAnnotationIdAndTagId: AnnotationTagsByAnnotationTagAnnotationIdAndTagIdManyToManyConnection;
  /** Full-text search ranking when filtered by `tsv`. */
  tsvRank?: Maybe<Scalars['Float']>;
};


export type AnnotationAnnotationTagsByAnnotationIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AnnotationTagsOrderBy>>;
  condition?: Maybe<AnnotationTagCondition>;
  filter?: Maybe<AnnotationTagFilter>;
};


export type AnnotationTagsByAnnotationTagAnnotationIdAndTagIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TagsOrderBy>>;
  condition?: Maybe<TagCondition>;
  filter?: Maybe<TagFilter>;
};

/** The `account` to be created by this mutation. */
export type AnnotationAccountIdFkeyAccountCreateInput = {
  email: Scalars['String'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  status?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  group?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  publicationsUsingAccountId?: Maybe<PublicationAccountIdFkeyInverseInput>;
  annotationsUsingAccountId?: Maybe<AnnotationAccountIdFkeyInverseInput>;
  authorsUsingAccountId?: Maybe<AuthorAccountIdFkeyInverseInput>;
  tagsUsingAccountId?: Maybe<TagAccountIdFkeyInverseInput>;
};

/** The `annotation` to be created by this mutation. */
export type AnnotationAccountIdFkeyAnnotationCreateInput = {
  annotationId: Scalars['String'];
  publicationId?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  highlightLocation?: Maybe<Scalars['JSON']>;
  highlightText?: Maybe<Scalars['String']>;
  noteText?: Maybe<Scalars['String']>;
  noteLocation?: Maybe<Scalars['JSON']>;
  recordedAt?: Maybe<Scalars['Datetime']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  editedHighlightText?: Maybe<Scalars['String']>;
  extraEdits?: Maybe<Scalars['JSON']>;
  tsv?: Maybe<Scalars['FullText']>;
  publicationToPublicationId?: Maybe<AnnotationPublicationIdFkeyInput>;
  accountToAccountId?: Maybe<AnnotationAccountIdFkeyInput>;
  annotationTagsUsingAnnotationId?: Maybe<AnnotationTagAnnotationIdFkeyInverseInput>;
};

/** Input for the nested mutation of `account` in the `AnnotationInput` mutation. */
export type AnnotationAccountIdFkeyInput = {
  /** The primary key(s) for `account` for the far side of the relationship. */
  connectByAccountId?: Maybe<AccountAccountPkeyConnect>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  connectByEmail?: Maybe<AccountAccountEmailKeyConnect>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  connectById?: Maybe<AccountNodeIdConnect>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  deleteByAccountId?: Maybe<AccountAccountPkeyDelete>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  deleteByEmail?: Maybe<AccountAccountEmailKeyDelete>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  deleteById?: Maybe<AccountNodeIdDelete>;
  /** The primary key(s) and patch data for `account` for the far side of the relationship. */
  updateByAccountId?: Maybe<AccountOnAnnotationForAnnotationAccountIdFkeyUsingAccountPkeyUpdate>;
  /** The primary key(s) and patch data for `account` for the far side of the relationship. */
  updateByEmail?: Maybe<AccountOnAnnotationForAnnotationAccountIdFkeyUsingAccountEmailKeyUpdate>;
  /** The primary key(s) and patch data for `account` for the far side of the relationship. */
  updateById?: Maybe<AnnotationOnAnnotationForAnnotationAccountIdFkeyNodeIdUpdate>;
  /** A `AccountInput` object that will be created and connected to this object. */
  create?: Maybe<AnnotationAccountIdFkeyAccountCreateInput>;
};

/** Input for the nested mutation of `annotation` in the `AccountInput` mutation. */
export type AnnotationAccountIdFkeyInverseInput = {
  /** Flag indicating whether all other `annotation` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `annotation` for the far side of the relationship. */
  connectByAnnotationId?: Maybe<Array<AnnotationAnnotationPkeyConnect>>;
  /** The primary key(s) for `annotation` for the far side of the relationship. */
  connectByPublicationIdAndAccountIdAndHighlightLocationAndHighlightText?: Maybe<Array<AnnotationNoDuplicateHighlightsConnect>>;
  /** The primary key(s) for `annotation` for the far side of the relationship. */
  connectByPublicationIdAndAccountIdAndNoteLocationAndNoteText?: Maybe<Array<AnnotationNoDuplicateNotesConnect>>;
  /** The primary key(s) for `annotation` for the far side of the relationship. */
  connectById?: Maybe<Array<AnnotationNodeIdConnect>>;
  /** The primary key(s) for `annotation` for the far side of the relationship. */
  deleteByAnnotationId?: Maybe<Array<AnnotationAnnotationPkeyDelete>>;
  /** The primary key(s) for `annotation` for the far side of the relationship. */
  deleteByPublicationIdAndAccountIdAndHighlightLocationAndHighlightText?: Maybe<Array<AnnotationNoDuplicateHighlightsDelete>>;
  /** The primary key(s) for `annotation` for the far side of the relationship. */
  deleteByPublicationIdAndAccountIdAndNoteLocationAndNoteText?: Maybe<Array<AnnotationNoDuplicateNotesDelete>>;
  /** The primary key(s) for `annotation` for the far side of the relationship. */
  deleteById?: Maybe<Array<AnnotationNodeIdDelete>>;
  /** The primary key(s) and patch data for `annotation` for the far side of the relationship. */
  updateByAnnotationId?: Maybe<Array<AnnotationOnAnnotationForAnnotationAccountIdFkeyUsingAnnotationPkeyUpdate>>;
  /** The primary key(s) and patch data for `annotation` for the far side of the relationship. */
  updateByPublicationIdAndAccountIdAndHighlightLocationAndHighlightText?: Maybe<Array<AnnotationOnAnnotationForAnnotationAccountIdFkeyUsingNoDuplicateHighlightsUpdate>>;
  /** The primary key(s) and patch data for `annotation` for the far side of the relationship. */
  updateByPublicationIdAndAccountIdAndNoteLocationAndNoteText?: Maybe<Array<AnnotationOnAnnotationForAnnotationAccountIdFkeyUsingNoDuplicateNotesUpdate>>;
  /** The primary key(s) and patch data for `annotation` for the far side of the relationship. */
  updateById?: Maybe<Array<AccountOnAnnotationForAnnotationAccountIdFkeyNodeIdUpdate>>;
  /** A `AnnotationInput` object that will be created and connected to this object. */
  create?: Maybe<Array<AnnotationAccountIdFkeyAnnotationCreateInput>>;
};

/** The fields on `annotation` to look up the row to connect. */
export type AnnotationAnnotationPkeyConnect = {
  annotationId: Scalars['String'];
};

/** The fields on `annotation` to look up the row to delete. */
export type AnnotationAnnotationPkeyDelete = {
  annotationId: Scalars['String'];
};

/**
 * A condition to be used against `Annotation` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type AnnotationCondition = {
  /** Checks for equality with the object’s `annotationId` field. */
  annotationId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `publicationId` field. */
  publicationId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `tsv` field. */
  tsv?: Maybe<Scalars['FullText']>;
};

/** A filter to be used against `Annotation` object types. All fields are combined with a logical ‘and.’ */
export type AnnotationFilter = {
  /** Filter by the object’s `annotationId` field. */
  annotationId?: Maybe<StringFilter>;
  /** Filter by the object’s `publicationId` field. */
  publicationId?: Maybe<StringFilter>;
  /** Filter by the object’s `accountId` field. */
  accountId?: Maybe<UuidFilter>;
  /** Filter by the object’s `tsv` field. */
  tsv?: Maybe<FullTextFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<AnnotationFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<AnnotationFilter>>;
  /** Negates the expression. */
  not?: Maybe<AnnotationFilter>;
};

/** An input for mutations affecting `Annotation` */
export type AnnotationInput = {
  annotationId: Scalars['String'];
  publicationId?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['UUID']>;
  color?: Maybe<Scalars['String']>;
  highlightLocation?: Maybe<Scalars['JSON']>;
  highlightText?: Maybe<Scalars['String']>;
  noteText?: Maybe<Scalars['String']>;
  noteLocation?: Maybe<Scalars['JSON']>;
  recordedAt?: Maybe<Scalars['Datetime']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  editedHighlightText?: Maybe<Scalars['String']>;
  extraEdits?: Maybe<Scalars['JSON']>;
  tsv?: Maybe<Scalars['FullText']>;
  publicationToPublicationId?: Maybe<AnnotationPublicationIdFkeyInput>;
  accountToAccountId?: Maybe<AnnotationAccountIdFkeyInput>;
  annotationTagsUsingAnnotationId?: Maybe<AnnotationTagAnnotationIdFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type AnnotationNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `annotation` to be connected. */
  id: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type AnnotationNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `annotation` to be deleted. */
  id: Scalars['ID'];
};

/** The fields on `annotation` to look up the row to connect. */
export type AnnotationNoDuplicateHighlightsConnect = {
  publicationId: Scalars['String'];
  accountId: Scalars['UUID'];
  highlightLocation: Scalars['JSON'];
  highlightText: Scalars['String'];
};

/** The fields on `annotation` to look up the row to delete. */
export type AnnotationNoDuplicateHighlightsDelete = {
  publicationId: Scalars['String'];
  accountId: Scalars['UUID'];
  highlightLocation: Scalars['JSON'];
  highlightText: Scalars['String'];
};

/** The fields on `annotation` to look up the row to connect. */
export type AnnotationNoDuplicateNotesConnect = {
  publicationId: Scalars['String'];
  accountId: Scalars['UUID'];
  noteLocation: Scalars['JSON'];
  noteText: Scalars['String'];
};

/** The fields on `annotation` to look up the row to delete. */
export type AnnotationNoDuplicateNotesDelete = {
  publicationId: Scalars['String'];
  accountId: Scalars['UUID'];
  noteLocation: Scalars['JSON'];
  noteText: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type AnnotationOnAnnotationForAnnotationAccountIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `account` to be connected. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `account` being updated. */
  accountPatch: AccountPatch;
};

/** The fields on `annotation` to look up the row to update. */
export type AnnotationOnAnnotationForAnnotationAccountIdFkeyUsingAnnotationPkeyUpdate = {
  /** An object where the defined keys will be set on the `annotation` being updated. */
  annotationPatch: UpdateAnnotationOnAnnotationForAnnotationAccountIdFkeyPatch;
  annotationId: Scalars['String'];
};

/** The fields on `annotation` to look up the row to update. */
export type AnnotationOnAnnotationForAnnotationAccountIdFkeyUsingNoDuplicateHighlightsUpdate = {
  /** An object where the defined keys will be set on the `annotation` being updated. */
  annotationPatch: UpdateAnnotationOnAnnotationForAnnotationAccountIdFkeyPatch;
  publicationId: Scalars['String'];
  accountId: Scalars['UUID'];
  highlightLocation: Scalars['JSON'];
  highlightText: Scalars['String'];
};

/** The fields on `annotation` to look up the row to update. */
export type AnnotationOnAnnotationForAnnotationAccountIdFkeyUsingNoDuplicateNotesUpdate = {
  /** An object where the defined keys will be set on the `annotation` being updated. */
  annotationPatch: UpdateAnnotationOnAnnotationForAnnotationAccountIdFkeyPatch;
  publicationId: Scalars['String'];
  accountId: Scalars['UUID'];
  noteLocation: Scalars['JSON'];
  noteText: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type AnnotationOnAnnotationForAnnotationPublicationIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `publication` to be connected. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `publication` being updated. */
  publicationPatch: PublicationPatch;
};

/** The fields on `annotation` to look up the row to update. */
export type AnnotationOnAnnotationForAnnotationPublicationIdFkeyUsingAnnotationPkeyUpdate = {
  /** An object where the defined keys will be set on the `annotation` being updated. */
  annotationPatch: UpdateAnnotationOnAnnotationForAnnotationPublicationIdFkeyPatch;
  annotationId: Scalars['String'];
};

/** The fields on `annotation` to look up the row to update. */
export type AnnotationOnAnnotationForAnnotationPublicationIdFkeyUsingNoDuplicateHighlightsUpdate = {
  /** An object where the defined keys will be set on the `annotation` being updated. */
  annotationPatch: UpdateAnnotationOnAnnotationForAnnotationPublicationIdFkeyPatch;
  publicationId: Scalars['String'];
  accountId: Scalars['UUID'];
  highlightLocation: Scalars['JSON'];
  highlightText: Scalars['String'];
};

/** The fields on `annotation` to look up the row to update. */
export type AnnotationOnAnnotationForAnnotationPublicationIdFkeyUsingNoDuplicateNotesUpdate = {
  /** An object where the defined keys will be set on the `annotation` being updated. */
  annotationPatch: UpdateAnnotationOnAnnotationForAnnotationPublicationIdFkeyPatch;
  publicationId: Scalars['String'];
  accountId: Scalars['UUID'];
  noteLocation: Scalars['JSON'];
  noteText: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type AnnotationOnAnnotationTagForAnnotationTagAnnotationIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `annotationTag` to be connected. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `annotationTag` being updated. */
  annotationTagPatch: AnnotationTagPatch;
};

/** The fields on `annotation` to look up the row to update. */
export type AnnotationOnAnnotationTagForAnnotationTagAnnotationIdFkeyUsingAnnotationPkeyUpdate = {
  /** An object where the defined keys will be set on the `annotation` being updated. */
  annotationPatch: UpdateAnnotationOnAnnotationTagForAnnotationTagAnnotationIdFkeyPatch;
  annotationId: Scalars['String'];
};

/** The fields on `annotation` to look up the row to update. */
export type AnnotationOnAnnotationTagForAnnotationTagAnnotationIdFkeyUsingNoDuplicateHighlightsUpdate = {
  /** An object where the defined keys will be set on the `annotation` being updated. */
  annotationPatch: UpdateAnnotationOnAnnotationTagForAnnotationTagAnnotationIdFkeyPatch;
  publicationId: Scalars['String'];
  accountId: Scalars['UUID'];
  highlightLocation: Scalars['JSON'];
  highlightText: Scalars['String'];
};

/** The fields on `annotation` to look up the row to update. */
export type AnnotationOnAnnotationTagForAnnotationTagAnnotationIdFkeyUsingNoDuplicateNotesUpdate = {
  /** An object where the defined keys will be set on the `annotation` being updated. */
  annotationPatch: UpdateAnnotationOnAnnotationTagForAnnotationTagAnnotationIdFkeyPatch;
  publicationId: Scalars['String'];
  accountId: Scalars['UUID'];
  noteLocation: Scalars['JSON'];
  noteText: Scalars['String'];
};

/** Represents an update to a `Annotation`. Fields that are set will be updated. */
export type AnnotationPatch = {
  annotationId?: Maybe<Scalars['String']>;
  publicationId?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['UUID']>;
  color?: Maybe<Scalars['String']>;
  highlightLocation?: Maybe<Scalars['JSON']>;
  highlightText?: Maybe<Scalars['String']>;
  noteText?: Maybe<Scalars['String']>;
  noteLocation?: Maybe<Scalars['JSON']>;
  recordedAt?: Maybe<Scalars['Datetime']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  editedHighlightText?: Maybe<Scalars['String']>;
  extraEdits?: Maybe<Scalars['JSON']>;
  tsv?: Maybe<Scalars['FullText']>;
  publicationToPublicationId?: Maybe<AnnotationPublicationIdFkeyInput>;
  accountToAccountId?: Maybe<AnnotationAccountIdFkeyInput>;
  annotationTagsUsingAnnotationId?: Maybe<AnnotationTagAnnotationIdFkeyInverseInput>;
};

/** The `annotation` to be created by this mutation. */
export type AnnotationPublicationIdFkeyAnnotationCreateInput = {
  annotationId: Scalars['String'];
  accountId?: Maybe<Scalars['UUID']>;
  color?: Maybe<Scalars['String']>;
  highlightLocation?: Maybe<Scalars['JSON']>;
  highlightText?: Maybe<Scalars['String']>;
  noteText?: Maybe<Scalars['String']>;
  noteLocation?: Maybe<Scalars['JSON']>;
  recordedAt?: Maybe<Scalars['Datetime']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  editedHighlightText?: Maybe<Scalars['String']>;
  extraEdits?: Maybe<Scalars['JSON']>;
  tsv?: Maybe<Scalars['FullText']>;
  publicationToPublicationId?: Maybe<AnnotationPublicationIdFkeyInput>;
  accountToAccountId?: Maybe<AnnotationAccountIdFkeyInput>;
  annotationTagsUsingAnnotationId?: Maybe<AnnotationTagAnnotationIdFkeyInverseInput>;
};

/** Input for the nested mutation of `publication` in the `AnnotationInput` mutation. */
export type AnnotationPublicationIdFkeyInput = {
  /** The primary key(s) for `publication` for the far side of the relationship. */
  connectByPublicationId?: Maybe<PublicationPublicationPkeyConnect>;
  /** The primary key(s) for `publication` for the far side of the relationship. */
  connectByAccountIdAndTitle?: Maybe<PublicationPublicationAccountIdTitleKeyConnect>;
  /** The primary key(s) for `publication` for the far side of the relationship. */
  connectById?: Maybe<PublicationNodeIdConnect>;
  /** The primary key(s) for `publication` for the far side of the relationship. */
  deleteByPublicationId?: Maybe<PublicationPublicationPkeyDelete>;
  /** The primary key(s) for `publication` for the far side of the relationship. */
  deleteByAccountIdAndTitle?: Maybe<PublicationPublicationAccountIdTitleKeyDelete>;
  /** The primary key(s) for `publication` for the far side of the relationship. */
  deleteById?: Maybe<PublicationNodeIdDelete>;
  /** The primary key(s) and patch data for `publication` for the far side of the relationship. */
  updateByPublicationId?: Maybe<PublicationOnAnnotationForAnnotationPublicationIdFkeyUsingPublicationPkeyUpdate>;
  /** The primary key(s) and patch data for `publication` for the far side of the relationship. */
  updateByAccountIdAndTitle?: Maybe<PublicationOnAnnotationForAnnotationPublicationIdFkeyUsingPublicationAccountIdTitleKeyUpdate>;
  /** The primary key(s) and patch data for `publication` for the far side of the relationship. */
  updateById?: Maybe<AnnotationOnAnnotationForAnnotationPublicationIdFkeyNodeIdUpdate>;
  /** A `PublicationInput` object that will be created and connected to this object. */
  create?: Maybe<AnnotationPublicationIdFkeyPublicationCreateInput>;
};

/** Input for the nested mutation of `annotation` in the `PublicationInput` mutation. */
export type AnnotationPublicationIdFkeyInverseInput = {
  /** Flag indicating whether all other `annotation` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `annotation` for the far side of the relationship. */
  connectByAnnotationId?: Maybe<Array<AnnotationAnnotationPkeyConnect>>;
  /** The primary key(s) for `annotation` for the far side of the relationship. */
  connectByPublicationIdAndAccountIdAndHighlightLocationAndHighlightText?: Maybe<Array<AnnotationNoDuplicateHighlightsConnect>>;
  /** The primary key(s) for `annotation` for the far side of the relationship. */
  connectByPublicationIdAndAccountIdAndNoteLocationAndNoteText?: Maybe<Array<AnnotationNoDuplicateNotesConnect>>;
  /** The primary key(s) for `annotation` for the far side of the relationship. */
  connectById?: Maybe<Array<AnnotationNodeIdConnect>>;
  /** The primary key(s) for `annotation` for the far side of the relationship. */
  deleteByAnnotationId?: Maybe<Array<AnnotationAnnotationPkeyDelete>>;
  /** The primary key(s) for `annotation` for the far side of the relationship. */
  deleteByPublicationIdAndAccountIdAndHighlightLocationAndHighlightText?: Maybe<Array<AnnotationNoDuplicateHighlightsDelete>>;
  /** The primary key(s) for `annotation` for the far side of the relationship. */
  deleteByPublicationIdAndAccountIdAndNoteLocationAndNoteText?: Maybe<Array<AnnotationNoDuplicateNotesDelete>>;
  /** The primary key(s) for `annotation` for the far side of the relationship. */
  deleteById?: Maybe<Array<AnnotationNodeIdDelete>>;
  /** The primary key(s) and patch data for `annotation` for the far side of the relationship. */
  updateByAnnotationId?: Maybe<Array<AnnotationOnAnnotationForAnnotationPublicationIdFkeyUsingAnnotationPkeyUpdate>>;
  /** The primary key(s) and patch data for `annotation` for the far side of the relationship. */
  updateByPublicationIdAndAccountIdAndHighlightLocationAndHighlightText?: Maybe<Array<AnnotationOnAnnotationForAnnotationPublicationIdFkeyUsingNoDuplicateHighlightsUpdate>>;
  /** The primary key(s) and patch data for `annotation` for the far side of the relationship. */
  updateByPublicationIdAndAccountIdAndNoteLocationAndNoteText?: Maybe<Array<AnnotationOnAnnotationForAnnotationPublicationIdFkeyUsingNoDuplicateNotesUpdate>>;
  /** The primary key(s) and patch data for `annotation` for the far side of the relationship. */
  updateById?: Maybe<Array<PublicationOnAnnotationForAnnotationPublicationIdFkeyNodeIdUpdate>>;
  /** A `AnnotationInput` object that will be created and connected to this object. */
  create?: Maybe<Array<AnnotationPublicationIdFkeyAnnotationCreateInput>>;
};

/** The `publication` to be created by this mutation. */
export type AnnotationPublicationIdFkeyPublicationCreateInput = {
  accountId?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  title: Scalars['String'];
  additionalMeta?: Maybe<Scalars['JSON']>;
  accountToAccountId?: Maybe<PublicationAccountIdFkeyInput>;
  bookUsingPublicationId?: Maybe<BookPublicationIdFkeyInverseInput>;
  annotationsUsingPublicationId?: Maybe<AnnotationPublicationIdFkeyInverseInput>;
  publicationAuthorsUsingPublicationId?: Maybe<PublicationAuthorPublicationIdFkeyInverseInput>;
};

/** A connection to a list of `Annotation` values. */
export type AnnotationsConnection = {
  /** A list of `Annotation` objects. */
  nodes: Array<Maybe<Annotation>>;
  /** A list of edges which contains the `Annotation` and cursor to aid in pagination. */
  edges: Array<AnnotationsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Annotation` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Annotation` edge in the connection. */
export type AnnotationsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Annotation` at the end of the edge. */
  node?: Maybe<Annotation>;
};

/** Methods to use when ordering `Annotation`. */
export enum AnnotationsOrderBy {
  Natural = 'NATURAL',
  AnnotationIdAsc = 'ANNOTATION_ID_ASC',
  AnnotationIdDesc = 'ANNOTATION_ID_DESC',
  PublicationIdAsc = 'PUBLICATION_ID_ASC',
  PublicationIdDesc = 'PUBLICATION_ID_DESC',
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  TsvAsc = 'TSV_ASC',
  TsvDesc = 'TSV_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TsvRankAsc = 'TSV_RANK_ASC',
  TsvRankDesc = 'TSV_RANK_DESC'
}

export type AnnotationTag = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
  annotationId: Scalars['String'];
  tagId: Scalars['String'];
  /** Reads a single `Annotation` that is related to this `AnnotationTag`. */
  annotationByAnnotationId?: Maybe<Annotation>;
  /** Reads a single `Tag` that is related to this `AnnotationTag`. */
  tagByTagId?: Maybe<Tag>;
};

/** The `annotation` to be created by this mutation. */
export type AnnotationTagAnnotationIdFkeyAnnotationCreateInput = {
  publicationId?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['UUID']>;
  color?: Maybe<Scalars['String']>;
  highlightLocation?: Maybe<Scalars['JSON']>;
  highlightText?: Maybe<Scalars['String']>;
  noteText?: Maybe<Scalars['String']>;
  noteLocation?: Maybe<Scalars['JSON']>;
  recordedAt?: Maybe<Scalars['Datetime']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  editedHighlightText?: Maybe<Scalars['String']>;
  extraEdits?: Maybe<Scalars['JSON']>;
  tsv?: Maybe<Scalars['FullText']>;
  publicationToPublicationId?: Maybe<AnnotationPublicationIdFkeyInput>;
  accountToAccountId?: Maybe<AnnotationAccountIdFkeyInput>;
  annotationTagsUsingAnnotationId?: Maybe<AnnotationTagAnnotationIdFkeyInverseInput>;
};

/** The `annotationTag` to be created by this mutation. */
export type AnnotationTagAnnotationIdFkeyAnnotationTagCreateInput = {
  tagId?: Maybe<Scalars['String']>;
  annotationToAnnotationId?: Maybe<AnnotationTagAnnotationIdFkeyInput>;
  tagToTagId?: Maybe<AnnotationTagTagIdFkeyInput>;
};

/** Input for the nested mutation of `annotation` in the `AnnotationTagInput` mutation. */
export type AnnotationTagAnnotationIdFkeyInput = {
  /** The primary key(s) for `annotation` for the far side of the relationship. */
  connectByAnnotationId?: Maybe<AnnotationAnnotationPkeyConnect>;
  /** The primary key(s) for `annotation` for the far side of the relationship. */
  connectByPublicationIdAndAccountIdAndHighlightLocationAndHighlightText?: Maybe<AnnotationNoDuplicateHighlightsConnect>;
  /** The primary key(s) for `annotation` for the far side of the relationship. */
  connectByPublicationIdAndAccountIdAndNoteLocationAndNoteText?: Maybe<AnnotationNoDuplicateNotesConnect>;
  /** The primary key(s) for `annotation` for the far side of the relationship. */
  connectById?: Maybe<AnnotationNodeIdConnect>;
  /** The primary key(s) for `annotation` for the far side of the relationship. */
  deleteByAnnotationId?: Maybe<AnnotationAnnotationPkeyDelete>;
  /** The primary key(s) for `annotation` for the far side of the relationship. */
  deleteByPublicationIdAndAccountIdAndHighlightLocationAndHighlightText?: Maybe<AnnotationNoDuplicateHighlightsDelete>;
  /** The primary key(s) for `annotation` for the far side of the relationship. */
  deleteByPublicationIdAndAccountIdAndNoteLocationAndNoteText?: Maybe<AnnotationNoDuplicateNotesDelete>;
  /** The primary key(s) for `annotation` for the far side of the relationship. */
  deleteById?: Maybe<AnnotationNodeIdDelete>;
  /** The primary key(s) and patch data for `annotation` for the far side of the relationship. */
  updateByAnnotationId?: Maybe<AnnotationOnAnnotationTagForAnnotationTagAnnotationIdFkeyUsingAnnotationPkeyUpdate>;
  /** The primary key(s) and patch data for `annotation` for the far side of the relationship. */
  updateByPublicationIdAndAccountIdAndHighlightLocationAndHighlightText?: Maybe<AnnotationOnAnnotationTagForAnnotationTagAnnotationIdFkeyUsingNoDuplicateHighlightsUpdate>;
  /** The primary key(s) and patch data for `annotation` for the far side of the relationship. */
  updateByPublicationIdAndAccountIdAndNoteLocationAndNoteText?: Maybe<AnnotationOnAnnotationTagForAnnotationTagAnnotationIdFkeyUsingNoDuplicateNotesUpdate>;
  /** The primary key(s) and patch data for `annotation` for the far side of the relationship. */
  updateById?: Maybe<AnnotationTagOnAnnotationTagForAnnotationTagAnnotationIdFkeyNodeIdUpdate>;
  /** A `AnnotationInput` object that will be created and connected to this object. */
  create?: Maybe<AnnotationTagAnnotationIdFkeyAnnotationCreateInput>;
};

/** Input for the nested mutation of `annotationTag` in the `AnnotationInput` mutation. */
export type AnnotationTagAnnotationIdFkeyInverseInput = {
  /** Flag indicating whether all other `annotationTag` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `annotationTag` for the far side of the relationship. */
  connectByAnnotationIdAndTagId?: Maybe<Array<AnnotationTagAnnotationTagPkeyConnect>>;
  /** The primary key(s) for `annotationTag` for the far side of the relationship. */
  connectById?: Maybe<Array<AnnotationTagNodeIdConnect>>;
  /** The primary key(s) for `annotationTag` for the far side of the relationship. */
  deleteByAnnotationIdAndTagId?: Maybe<Array<AnnotationTagAnnotationTagPkeyDelete>>;
  /** The primary key(s) for `annotationTag` for the far side of the relationship. */
  deleteById?: Maybe<Array<AnnotationTagNodeIdDelete>>;
  /** The primary key(s) and patch data for `annotationTag` for the far side of the relationship. */
  updateByAnnotationIdAndTagId?: Maybe<Array<AnnotationTagOnAnnotationTagForAnnotationTagAnnotationIdFkeyUsingAnnotationTagPkeyUpdate>>;
  /** The primary key(s) and patch data for `annotationTag` for the far side of the relationship. */
  updateById?: Maybe<Array<AnnotationOnAnnotationTagForAnnotationTagAnnotationIdFkeyNodeIdUpdate>>;
  /** A `AnnotationTagInput` object that will be created and connected to this object. */
  create?: Maybe<Array<AnnotationTagAnnotationIdFkeyAnnotationTagCreateInput>>;
};

/** The fields on `annotationTag` to look up the row to connect. */
export type AnnotationTagAnnotationTagPkeyConnect = {
  annotationId: Scalars['String'];
  tagId: Scalars['String'];
};

/** The fields on `annotationTag` to look up the row to delete. */
export type AnnotationTagAnnotationTagPkeyDelete = {
  annotationId: Scalars['String'];
  tagId: Scalars['String'];
};

/**
 * A condition to be used against `AnnotationTag` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type AnnotationTagCondition = {
  /** Checks for equality with the object’s `annotationId` field. */
  annotationId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `tagId` field. */
  tagId?: Maybe<Scalars['String']>;
};

/** A filter to be used against `AnnotationTag` object types. All fields are combined with a logical ‘and.’ */
export type AnnotationTagFilter = {
  /** Filter by the object’s `annotationId` field. */
  annotationId?: Maybe<StringFilter>;
  /** Filter by the object’s `tagId` field. */
  tagId?: Maybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<AnnotationTagFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<AnnotationTagFilter>>;
  /** Negates the expression. */
  not?: Maybe<AnnotationTagFilter>;
};

/** An input for mutations affecting `AnnotationTag` */
export type AnnotationTagInput = {
  annotationId?: Maybe<Scalars['String']>;
  tagId?: Maybe<Scalars['String']>;
  annotationToAnnotationId?: Maybe<AnnotationTagAnnotationIdFkeyInput>;
  tagToTagId?: Maybe<AnnotationTagTagIdFkeyInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type AnnotationTagNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `annotationTag` to be connected. */
  id: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type AnnotationTagNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `annotationTag` to be deleted. */
  id: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type AnnotationTagOnAnnotationTagForAnnotationTagAnnotationIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `annotation` to be connected. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `annotation` being updated. */
  annotationPatch: AnnotationPatch;
};

/** The fields on `annotationTag` to look up the row to update. */
export type AnnotationTagOnAnnotationTagForAnnotationTagAnnotationIdFkeyUsingAnnotationTagPkeyUpdate = {
  /** An object where the defined keys will be set on the `annotationTag` being updated. */
  annotationTagPatch: UpdateAnnotationTagOnAnnotationTagForAnnotationTagAnnotationIdFkeyPatch;
  annotationId: Scalars['String'];
  tagId: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type AnnotationTagOnAnnotationTagForAnnotationTagTagIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `tag` to be connected. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `tag` being updated. */
  tagPatch: TagPatch;
};

/** The fields on `annotationTag` to look up the row to update. */
export type AnnotationTagOnAnnotationTagForAnnotationTagTagIdFkeyUsingAnnotationTagPkeyUpdate = {
  /** An object where the defined keys will be set on the `annotationTag` being updated. */
  annotationTagPatch: UpdateAnnotationTagOnAnnotationTagForAnnotationTagTagIdFkeyPatch;
  annotationId: Scalars['String'];
  tagId: Scalars['String'];
};

/** Represents an update to a `AnnotationTag`. Fields that are set will be updated. */
export type AnnotationTagPatch = {
  annotationId?: Maybe<Scalars['String']>;
  tagId?: Maybe<Scalars['String']>;
  annotationToAnnotationId?: Maybe<AnnotationTagAnnotationIdFkeyInput>;
  tagToTagId?: Maybe<AnnotationTagTagIdFkeyInput>;
};

/** A connection to a list of `Tag` values, with data from `AnnotationTag`. */
export type AnnotationTagsByAnnotationTagAnnotationIdAndTagIdManyToManyConnection = {
  /** A list of `Tag` objects. */
  nodes: Array<Maybe<Tag>>;
  /** A list of edges which contains the `Tag`, info from the `AnnotationTag`, and the cursor to aid in pagination. */
  edges: Array<AnnotationTagsByAnnotationTagAnnotationIdAndTagIdManyToManyEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Tag` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Tag` edge in the connection, with data from `AnnotationTag`. */
export type AnnotationTagsByAnnotationTagAnnotationIdAndTagIdManyToManyEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Tag` at the end of the edge. */
  node?: Maybe<Tag>;
};

/** A connection to a list of `AnnotationTag` values. */
export type AnnotationTagsConnection = {
  /** A list of `AnnotationTag` objects. */
  nodes: Array<Maybe<AnnotationTag>>;
  /** A list of edges which contains the `AnnotationTag` and cursor to aid in pagination. */
  edges: Array<AnnotationTagsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `AnnotationTag` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `AnnotationTag` edge in the connection. */
export type AnnotationTagsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `AnnotationTag` at the end of the edge. */
  node?: Maybe<AnnotationTag>;
};

/** Methods to use when ordering `AnnotationTag`. */
export enum AnnotationTagsOrderBy {
  Natural = 'NATURAL',
  AnnotationIdAsc = 'ANNOTATION_ID_ASC',
  AnnotationIdDesc = 'ANNOTATION_ID_DESC',
  TagIdAsc = 'TAG_ID_ASC',
  TagIdDesc = 'TAG_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The `annotationTag` to be created by this mutation. */
export type AnnotationTagTagIdFkeyAnnotationTagCreateInput = {
  annotationId?: Maybe<Scalars['String']>;
  annotationToAnnotationId?: Maybe<AnnotationTagAnnotationIdFkeyInput>;
  tagToTagId?: Maybe<AnnotationTagTagIdFkeyInput>;
};

/** Input for the nested mutation of `tag` in the `AnnotationTagInput` mutation. */
export type AnnotationTagTagIdFkeyInput = {
  /** The primary key(s) for `tag` for the far side of the relationship. */
  connectByTagId?: Maybe<TagTagPkeyConnect>;
  /** The primary key(s) for `tag` for the far side of the relationship. */
  connectByAccountIdAndTagName?: Maybe<TagNoDuplicateTagsPerAccountConnect>;
  /** The primary key(s) for `tag` for the far side of the relationship. */
  connectById?: Maybe<TagNodeIdConnect>;
  /** The primary key(s) for `tag` for the far side of the relationship. */
  deleteByTagId?: Maybe<TagTagPkeyDelete>;
  /** The primary key(s) for `tag` for the far side of the relationship. */
  deleteByAccountIdAndTagName?: Maybe<TagNoDuplicateTagsPerAccountDelete>;
  /** The primary key(s) for `tag` for the far side of the relationship. */
  deleteById?: Maybe<TagNodeIdDelete>;
  /** The primary key(s) and patch data for `tag` for the far side of the relationship. */
  updateByTagId?: Maybe<TagOnAnnotationTagForAnnotationTagTagIdFkeyUsingTagPkeyUpdate>;
  /** The primary key(s) and patch data for `tag` for the far side of the relationship. */
  updateByAccountIdAndTagName?: Maybe<TagOnAnnotationTagForAnnotationTagTagIdFkeyUsingNoDuplicateTagsPerAccountUpdate>;
  /** The primary key(s) and patch data for `tag` for the far side of the relationship. */
  updateById?: Maybe<AnnotationTagOnAnnotationTagForAnnotationTagTagIdFkeyNodeIdUpdate>;
  /** A `TagInput` object that will be created and connected to this object. */
  create?: Maybe<AnnotationTagTagIdFkeyTagCreateInput>;
};

/** Input for the nested mutation of `annotationTag` in the `TagInput` mutation. */
export type AnnotationTagTagIdFkeyInverseInput = {
  /** Flag indicating whether all other `annotationTag` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `annotationTag` for the far side of the relationship. */
  connectByAnnotationIdAndTagId?: Maybe<Array<AnnotationTagAnnotationTagPkeyConnect>>;
  /** The primary key(s) for `annotationTag` for the far side of the relationship. */
  connectById?: Maybe<Array<AnnotationTagNodeIdConnect>>;
  /** The primary key(s) for `annotationTag` for the far side of the relationship. */
  deleteByAnnotationIdAndTagId?: Maybe<Array<AnnotationTagAnnotationTagPkeyDelete>>;
  /** The primary key(s) for `annotationTag` for the far side of the relationship. */
  deleteById?: Maybe<Array<AnnotationTagNodeIdDelete>>;
  /** The primary key(s) and patch data for `annotationTag` for the far side of the relationship. */
  updateByAnnotationIdAndTagId?: Maybe<Array<AnnotationTagOnAnnotationTagForAnnotationTagTagIdFkeyUsingAnnotationTagPkeyUpdate>>;
  /** The primary key(s) and patch data for `annotationTag` for the far side of the relationship. */
  updateById?: Maybe<Array<TagOnAnnotationTagForAnnotationTagTagIdFkeyNodeIdUpdate>>;
  /** A `AnnotationTagInput` object that will be created and connected to this object. */
  create?: Maybe<Array<AnnotationTagTagIdFkeyAnnotationTagCreateInput>>;
};

/** The `tag` to be created by this mutation. */
export type AnnotationTagTagIdFkeyTagCreateInput = {
  tagName: Scalars['String'];
  accountId?: Maybe<Scalars['UUID']>;
  accountToAccountId?: Maybe<TagAccountIdFkeyInput>;
  annotationTagsUsingTagId?: Maybe<AnnotationTagTagIdFkeyInverseInput>;
};

export type Author = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
  authorId: Scalars['String'];
  fullName: Scalars['String'];
  accountId: Scalars['UUID'];
  /** Reads a single `Account` that is related to this `Author`. */
  accountByAccountId?: Maybe<Account>;
  /** Reads and enables pagination through a set of `PublicationAuthor`. */
  publicationAuthorsByAuthorId: PublicationAuthorsConnection;
  /** Reads and enables pagination through a set of `Publication`. */
  publicationsByPublicationAuthorAuthorIdAndPublicationId: AuthorPublicationsByPublicationAuthorAuthorIdAndPublicationIdManyToManyConnection;
};


export type AuthorPublicationAuthorsByAuthorIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PublicationAuthorsOrderBy>>;
  condition?: Maybe<PublicationAuthorCondition>;
  filter?: Maybe<PublicationAuthorFilter>;
};


export type AuthorPublicationsByPublicationAuthorAuthorIdAndPublicationIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PublicationsOrderBy>>;
  condition?: Maybe<PublicationCondition>;
  filter?: Maybe<PublicationFilter>;
};

/** The `account` to be created by this mutation. */
export type AuthorAccountIdFkeyAccountCreateInput = {
  email: Scalars['String'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  status?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  group?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  publicationsUsingAccountId?: Maybe<PublicationAccountIdFkeyInverseInput>;
  annotationsUsingAccountId?: Maybe<AnnotationAccountIdFkeyInverseInput>;
  authorsUsingAccountId?: Maybe<AuthorAccountIdFkeyInverseInput>;
  tagsUsingAccountId?: Maybe<TagAccountIdFkeyInverseInput>;
};

/** The `author` to be created by this mutation. */
export type AuthorAccountIdFkeyAuthorCreateInput = {
  authorId: Scalars['String'];
  fullName: Scalars['String'];
  accountToAccountId?: Maybe<AuthorAccountIdFkeyInput>;
  publicationAuthorsUsingAuthorId?: Maybe<PublicationAuthorAuthorIdFkeyInverseInput>;
};

/** Input for the nested mutation of `account` in the `AuthorInput` mutation. */
export type AuthorAccountIdFkeyInput = {
  /** The primary key(s) for `account` for the far side of the relationship. */
  connectByAccountId?: Maybe<AccountAccountPkeyConnect>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  connectByEmail?: Maybe<AccountAccountEmailKeyConnect>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  connectById?: Maybe<AccountNodeIdConnect>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  deleteByAccountId?: Maybe<AccountAccountPkeyDelete>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  deleteByEmail?: Maybe<AccountAccountEmailKeyDelete>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  deleteById?: Maybe<AccountNodeIdDelete>;
  /** The primary key(s) and patch data for `account` for the far side of the relationship. */
  updateByAccountId?: Maybe<AccountOnAuthorForAuthorAccountIdFkeyUsingAccountPkeyUpdate>;
  /** The primary key(s) and patch data for `account` for the far side of the relationship. */
  updateByEmail?: Maybe<AccountOnAuthorForAuthorAccountIdFkeyUsingAccountEmailKeyUpdate>;
  /** The primary key(s) and patch data for `account` for the far side of the relationship. */
  updateById?: Maybe<AuthorOnAuthorForAuthorAccountIdFkeyNodeIdUpdate>;
  /** A `AccountInput` object that will be created and connected to this object. */
  create?: Maybe<AuthorAccountIdFkeyAccountCreateInput>;
};

/** Input for the nested mutation of `author` in the `AccountInput` mutation. */
export type AuthorAccountIdFkeyInverseInput = {
  /** Flag indicating whether all other `author` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `author` for the far side of the relationship. */
  connectByAuthorId?: Maybe<Array<AuthorAuthorPkeyConnect>>;
  /** The primary key(s) for `author` for the far side of the relationship. */
  connectByFullName?: Maybe<Array<AuthorAuthorFullNameKeyConnect>>;
  /** The primary key(s) for `author` for the far side of the relationship. */
  connectByAccountIdAndFullName?: Maybe<Array<AuthorNoDuplicateAuthorsPerAccountConnect>>;
  /** The primary key(s) for `author` for the far side of the relationship. */
  connectById?: Maybe<Array<AuthorNodeIdConnect>>;
  /** The primary key(s) for `author` for the far side of the relationship. */
  deleteByAuthorId?: Maybe<Array<AuthorAuthorPkeyDelete>>;
  /** The primary key(s) for `author` for the far side of the relationship. */
  deleteByFullName?: Maybe<Array<AuthorAuthorFullNameKeyDelete>>;
  /** The primary key(s) for `author` for the far side of the relationship. */
  deleteByAccountIdAndFullName?: Maybe<Array<AuthorNoDuplicateAuthorsPerAccountDelete>>;
  /** The primary key(s) for `author` for the far side of the relationship. */
  deleteById?: Maybe<Array<AuthorNodeIdDelete>>;
  /** The primary key(s) and patch data for `author` for the far side of the relationship. */
  updateByAuthorId?: Maybe<Array<AuthorOnAuthorForAuthorAccountIdFkeyUsingAuthorPkeyUpdate>>;
  /** The primary key(s) and patch data for `author` for the far side of the relationship. */
  updateByFullName?: Maybe<Array<AuthorOnAuthorForAuthorAccountIdFkeyUsingAuthorFullNameKeyUpdate>>;
  /** The primary key(s) and patch data for `author` for the far side of the relationship. */
  updateByAccountIdAndFullName?: Maybe<Array<AuthorOnAuthorForAuthorAccountIdFkeyUsingNoDuplicateAuthorsPerAccountUpdate>>;
  /** The primary key(s) and patch data for `author` for the far side of the relationship. */
  updateById?: Maybe<Array<AccountOnAuthorForAuthorAccountIdFkeyNodeIdUpdate>>;
  /** A `AuthorInput` object that will be created and connected to this object. */
  create?: Maybe<Array<AuthorAccountIdFkeyAuthorCreateInput>>;
};

/** The fields on `author` to look up the row to connect. */
export type AuthorAuthorFullNameKeyConnect = {
  fullName: Scalars['String'];
};

/** The fields on `author` to look up the row to delete. */
export type AuthorAuthorFullNameKeyDelete = {
  fullName: Scalars['String'];
};

/** The fields on `author` to look up the row to connect. */
export type AuthorAuthorPkeyConnect = {
  authorId: Scalars['String'];
};

/** The fields on `author` to look up the row to delete. */
export type AuthorAuthorPkeyDelete = {
  authorId: Scalars['String'];
};

/** A condition to be used against `Author` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AuthorCondition = {
  /** Checks for equality with the object’s `authorId` field. */
  authorId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `fullName` field. */
  fullName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: Maybe<Scalars['UUID']>;
};

/** A filter to be used against `Author` object types. All fields are combined with a logical ‘and.’ */
export type AuthorFilter = {
  /** Filter by the object’s `authorId` field. */
  authorId?: Maybe<StringFilter>;
  /** Filter by the object’s `fullName` field. */
  fullName?: Maybe<StringFilter>;
  /** Filter by the object’s `accountId` field. */
  accountId?: Maybe<UuidFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<AuthorFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<AuthorFilter>>;
  /** Negates the expression. */
  not?: Maybe<AuthorFilter>;
};

/** An input for mutations affecting `Author` */
export type AuthorInput = {
  authorId: Scalars['String'];
  fullName: Scalars['String'];
  accountId?: Maybe<Scalars['UUID']>;
  accountToAccountId?: Maybe<AuthorAccountIdFkeyInput>;
  publicationAuthorsUsingAuthorId?: Maybe<PublicationAuthorAuthorIdFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type AuthorNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `author` to be connected. */
  id: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type AuthorNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `author` to be deleted. */
  id: Scalars['ID'];
};

/** The fields on `author` to look up the row to connect. */
export type AuthorNoDuplicateAuthorsPerAccountConnect = {
  accountId: Scalars['UUID'];
  fullName: Scalars['String'];
};

/** The fields on `author` to look up the row to delete. */
export type AuthorNoDuplicateAuthorsPerAccountDelete = {
  accountId: Scalars['UUID'];
  fullName: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type AuthorOnAuthorForAuthorAccountIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `account` to be connected. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `account` being updated. */
  accountPatch: AccountPatch;
};

/** The fields on `author` to look up the row to update. */
export type AuthorOnAuthorForAuthorAccountIdFkeyUsingAuthorFullNameKeyUpdate = {
  /** An object where the defined keys will be set on the `author` being updated. */
  authorPatch: UpdateAuthorOnAuthorForAuthorAccountIdFkeyPatch;
  fullName: Scalars['String'];
};

/** The fields on `author` to look up the row to update. */
export type AuthorOnAuthorForAuthorAccountIdFkeyUsingAuthorPkeyUpdate = {
  /** An object where the defined keys will be set on the `author` being updated. */
  authorPatch: UpdateAuthorOnAuthorForAuthorAccountIdFkeyPatch;
  authorId: Scalars['String'];
};

/** The fields on `author` to look up the row to update. */
export type AuthorOnAuthorForAuthorAccountIdFkeyUsingNoDuplicateAuthorsPerAccountUpdate = {
  /** An object where the defined keys will be set on the `author` being updated. */
  authorPatch: UpdateAuthorOnAuthorForAuthorAccountIdFkeyPatch;
  accountId: Scalars['UUID'];
  fullName: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type AuthorOnPublicationAuthorForPublicationAuthorAuthorIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `publicationAuthor` to be connected. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `publicationAuthor` being updated. */
  publicationAuthorPatch: PublicationAuthorPatch;
};

/** The fields on `author` to look up the row to update. */
export type AuthorOnPublicationAuthorForPublicationAuthorAuthorIdFkeyUsingAuthorFullNameKeyUpdate = {
  /** An object where the defined keys will be set on the `author` being updated. */
  authorPatch: UpdateAuthorOnPublicationAuthorForPublicationAuthorAuthorIdFkeyPatch;
  fullName: Scalars['String'];
};

/** The fields on `author` to look up the row to update. */
export type AuthorOnPublicationAuthorForPublicationAuthorAuthorIdFkeyUsingAuthorPkeyUpdate = {
  /** An object where the defined keys will be set on the `author` being updated. */
  authorPatch: UpdateAuthorOnPublicationAuthorForPublicationAuthorAuthorIdFkeyPatch;
  authorId: Scalars['String'];
};

/** The fields on `author` to look up the row to update. */
export type AuthorOnPublicationAuthorForPublicationAuthorAuthorIdFkeyUsingNoDuplicateAuthorsPerAccountUpdate = {
  /** An object where the defined keys will be set on the `author` being updated. */
  authorPatch: UpdateAuthorOnPublicationAuthorForPublicationAuthorAuthorIdFkeyPatch;
  accountId: Scalars['UUID'];
  fullName: Scalars['String'];
};

/** Represents an update to a `Author`. Fields that are set will be updated. */
export type AuthorPatch = {
  authorId?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['UUID']>;
  accountToAccountId?: Maybe<AuthorAccountIdFkeyInput>;
  publicationAuthorsUsingAuthorId?: Maybe<PublicationAuthorAuthorIdFkeyInverseInput>;
};

/** A connection to a list of `Publication` values, with data from `PublicationAuthor`. */
export type AuthorPublicationsByPublicationAuthorAuthorIdAndPublicationIdManyToManyConnection = {
  /** A list of `Publication` objects. */
  nodes: Array<Maybe<Publication>>;
  /** A list of edges which contains the `Publication`, info from the `PublicationAuthor`, and the cursor to aid in pagination. */
  edges: Array<AuthorPublicationsByPublicationAuthorAuthorIdAndPublicationIdManyToManyEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Publication` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Publication` edge in the connection, with data from `PublicationAuthor`. */
export type AuthorPublicationsByPublicationAuthorAuthorIdAndPublicationIdManyToManyEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Publication` at the end of the edge. */
  node?: Maybe<Publication>;
};

/** A connection to a list of `Author` values. */
export type AuthorsConnection = {
  /** A list of `Author` objects. */
  nodes: Array<Maybe<Author>>;
  /** A list of edges which contains the `Author` and cursor to aid in pagination. */
  edges: Array<AuthorsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Author` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Author` edge in the connection. */
export type AuthorsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Author` at the end of the edge. */
  node?: Maybe<Author>;
};

/** Methods to use when ordering `Author`. */
export enum AuthorsOrderBy {
  Natural = 'NATURAL',
  AuthorIdAsc = 'AUTHOR_ID_ASC',
  AuthorIdDesc = 'AUTHOR_ID_DESC',
  FullNameAsc = 'FULL_NAME_ASC',
  FullNameDesc = 'FULL_NAME_DESC',
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Book = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
  publicationId: Scalars['String'];
  isbn13?: Maybe<Scalars['String']>;
  bookTitle: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  publicationDate?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  bookType?: Maybe<Scalars['String']>;
  /** Reads a single `Publication` that is related to this `Book`. */
  publicationByPublicationId?: Maybe<Publication>;
};

/** The fields on `book` to look up the row to connect. */
export type BookBookPkeyConnect = {
  publicationId: Scalars['String'];
};

/** The fields on `book` to look up the row to delete. */
export type BookBookPkeyDelete = {
  publicationId: Scalars['String'];
};

/** A condition to be used against `Book` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type BookCondition = {
  /** Checks for equality with the object’s `publicationId` field. */
  publicationId?: Maybe<Scalars['String']>;
};

/** A filter to be used against `Book` object types. All fields are combined with a logical ‘and.’ */
export type BookFilter = {
  /** Filter by the object’s `publicationId` field. */
  publicationId?: Maybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<BookFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<BookFilter>>;
  /** Negates the expression. */
  not?: Maybe<BookFilter>;
};

/** An input for mutations affecting `Book` */
export type BookInput = {
  publicationId?: Maybe<Scalars['String']>;
  isbn13?: Maybe<Scalars['String']>;
  bookTitle: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  publicationDate?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  bookType?: Maybe<Scalars['String']>;
  publicationToPublicationId?: Maybe<BookPublicationIdFkeyInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type BookNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `book` to be connected. */
  id: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type BookNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `book` to be deleted. */
  id: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type BookOnBookForBookPublicationIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `publication` to be connected. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `publication` being updated. */
  publicationPatch: PublicationPatch;
};

/** The fields on `book` to look up the row to update. */
export type BookOnBookForBookPublicationIdFkeyUsingBookPkeyUpdate = {
  /** An object where the defined keys will be set on the `book` being updated. */
  bookPatch: UpdateBookOnBookForBookPublicationIdFkeyPatch;
  publicationId: Scalars['String'];
};

/** Represents an update to a `Book`. Fields that are set will be updated. */
export type BookPatch = {
  publicationId?: Maybe<Scalars['String']>;
  isbn13?: Maybe<Scalars['String']>;
  bookTitle?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  publicationDate?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  bookType?: Maybe<Scalars['String']>;
  publicationToPublicationId?: Maybe<BookPublicationIdFkeyInput>;
};

/** The `book` to be created by this mutation. */
export type BookPublicationIdFkeyBookCreateInput = {
  isbn13?: Maybe<Scalars['String']>;
  bookTitle: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  publicationDate?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  bookType?: Maybe<Scalars['String']>;
  publicationToPublicationId?: Maybe<BookPublicationIdFkeyInput>;
};

/** Input for the nested mutation of `publication` in the `BookInput` mutation. */
export type BookPublicationIdFkeyInput = {
  /** The primary key(s) for `publication` for the far side of the relationship. */
  connectByPublicationId?: Maybe<PublicationPublicationPkeyConnect>;
  /** The primary key(s) for `publication` for the far side of the relationship. */
  connectByAccountIdAndTitle?: Maybe<PublicationPublicationAccountIdTitleKeyConnect>;
  /** The primary key(s) for `publication` for the far side of the relationship. */
  connectById?: Maybe<PublicationNodeIdConnect>;
  /** The primary key(s) for `publication` for the far side of the relationship. */
  deleteByPublicationId?: Maybe<PublicationPublicationPkeyDelete>;
  /** The primary key(s) for `publication` for the far side of the relationship. */
  deleteByAccountIdAndTitle?: Maybe<PublicationPublicationAccountIdTitleKeyDelete>;
  /** The primary key(s) for `publication` for the far side of the relationship. */
  deleteById?: Maybe<PublicationNodeIdDelete>;
  /** The primary key(s) and patch data for `publication` for the far side of the relationship. */
  updateByPublicationId?: Maybe<PublicationOnBookForBookPublicationIdFkeyUsingPublicationPkeyUpdate>;
  /** The primary key(s) and patch data for `publication` for the far side of the relationship. */
  updateByAccountIdAndTitle?: Maybe<PublicationOnBookForBookPublicationIdFkeyUsingPublicationAccountIdTitleKeyUpdate>;
  /** The primary key(s) and patch data for `publication` for the far side of the relationship. */
  updateById?: Maybe<BookOnBookForBookPublicationIdFkeyNodeIdUpdate>;
  /** A `PublicationInput` object that will be created and connected to this object. */
  create?: Maybe<BookPublicationIdFkeyPublicationCreateInput>;
};

/** Input for the nested mutation of `book` in the `PublicationInput` mutation. */
export type BookPublicationIdFkeyInverseInput = {
  /** Flag indicating whether all other `book` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `book` for the far side of the relationship. */
  connectByPublicationId?: Maybe<BookBookPkeyConnect>;
  /** The primary key(s) for `book` for the far side of the relationship. */
  connectById?: Maybe<BookNodeIdConnect>;
  /** The primary key(s) for `book` for the far side of the relationship. */
  deleteByPublicationId?: Maybe<BookBookPkeyDelete>;
  /** The primary key(s) for `book` for the far side of the relationship. */
  deleteById?: Maybe<BookNodeIdDelete>;
  /** The primary key(s) and patch data for `book` for the far side of the relationship. */
  updateByPublicationId?: Maybe<BookOnBookForBookPublicationIdFkeyUsingBookPkeyUpdate>;
  /** The primary key(s) and patch data for `book` for the far side of the relationship. */
  updateById?: Maybe<PublicationOnBookForBookPublicationIdFkeyNodeIdUpdate>;
  /** A `BookInput` object that will be created and connected to this object. */
  create?: Maybe<Array<BookPublicationIdFkeyBookCreateInput>>;
};

/** The `publication` to be created by this mutation. */
export type BookPublicationIdFkeyPublicationCreateInput = {
  accountId?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  title: Scalars['String'];
  additionalMeta?: Maybe<Scalars['JSON']>;
  accountToAccountId?: Maybe<PublicationAccountIdFkeyInput>;
  bookUsingPublicationId?: Maybe<BookPublicationIdFkeyInverseInput>;
  annotationsUsingPublicationId?: Maybe<AnnotationPublicationIdFkeyInverseInput>;
  publicationAuthorsUsingPublicationId?: Maybe<PublicationAuthorPublicationIdFkeyInverseInput>;
};

/** A connection to a list of `Book` values. */
export type BooksConnection = {
  /** A list of `Book` objects. */
  nodes: Array<Maybe<Book>>;
  /** A list of edges which contains the `Book` and cursor to aid in pagination. */
  edges: Array<BooksEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Book` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Book` edge in the connection. */
export type BooksEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Book` at the end of the edge. */
  node?: Maybe<Book>;
};

/** Methods to use when ordering `Book`. */
export enum BooksOrderBy {
  Natural = 'NATURAL',
  PublicationIdAsc = 'PUBLICATION_ID_ASC',
  PublicationIdDesc = 'PUBLICATION_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the create `Account` mutation. */
export type CreateAccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Account` to be created by this mutation. */
  account: AccountInput;
};

/** The output of our create `Account` mutation. */
export type CreateAccountPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Account` that was created by this mutation. */
  account?: Maybe<Account>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Account`. May be used by Relay 1. */
  accountEdge?: Maybe<AccountsEdge>;
};


/** The output of our create `Account` mutation. */
export type CreateAccountPayloadAccountEdgeArgs = {
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};

/** All input for the create `Annotation` mutation. */
export type CreateAnnotationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Annotation` to be created by this mutation. */
  annotation: AnnotationInput;
};

/** The output of our create `Annotation` mutation. */
export type CreateAnnotationPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Annotation` that was created by this mutation. */
  annotation?: Maybe<Annotation>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Publication` that is related to this `Annotation`. */
  publicationByPublicationId?: Maybe<Publication>;
  /** Reads a single `Account` that is related to this `Annotation`. */
  accountByAccountId?: Maybe<Account>;
  /** An edge for our `Annotation`. May be used by Relay 1. */
  annotationEdge?: Maybe<AnnotationsEdge>;
};


/** The output of our create `Annotation` mutation. */
export type CreateAnnotationPayloadAnnotationEdgeArgs = {
  orderBy?: Maybe<Array<AnnotationsOrderBy>>;
};

/** All input for the create `AnnotationTag` mutation. */
export type CreateAnnotationTagInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `AnnotationTag` to be created by this mutation. */
  annotationTag: AnnotationTagInput;
};

/** The output of our create `AnnotationTag` mutation. */
export type CreateAnnotationTagPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `AnnotationTag` that was created by this mutation. */
  annotationTag?: Maybe<AnnotationTag>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Annotation` that is related to this `AnnotationTag`. */
  annotationByAnnotationId?: Maybe<Annotation>;
  /** Reads a single `Tag` that is related to this `AnnotationTag`. */
  tagByTagId?: Maybe<Tag>;
  /** An edge for our `AnnotationTag`. May be used by Relay 1. */
  annotationTagEdge?: Maybe<AnnotationTagsEdge>;
};


/** The output of our create `AnnotationTag` mutation. */
export type CreateAnnotationTagPayloadAnnotationTagEdgeArgs = {
  orderBy?: Maybe<Array<AnnotationTagsOrderBy>>;
};

/** All input for the create `Author` mutation. */
export type CreateAuthorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Author` to be created by this mutation. */
  author: AuthorInput;
};

/** The output of our create `Author` mutation. */
export type CreateAuthorPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Author` that was created by this mutation. */
  author?: Maybe<Author>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Account` that is related to this `Author`. */
  accountByAccountId?: Maybe<Account>;
  /** An edge for our `Author`. May be used by Relay 1. */
  authorEdge?: Maybe<AuthorsEdge>;
};


/** The output of our create `Author` mutation. */
export type CreateAuthorPayloadAuthorEdgeArgs = {
  orderBy?: Maybe<Array<AuthorsOrderBy>>;
};

/** All input for the create `Book` mutation. */
export type CreateBookInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Book` to be created by this mutation. */
  book: BookInput;
};

/** The output of our create `Book` mutation. */
export type CreateBookPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Book` that was created by this mutation. */
  book?: Maybe<Book>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Publication` that is related to this `Book`. */
  publicationByPublicationId?: Maybe<Publication>;
  /** An edge for our `Book`. May be used by Relay 1. */
  bookEdge?: Maybe<BooksEdge>;
};


/** The output of our create `Book` mutation. */
export type CreateBookPayloadBookEdgeArgs = {
  orderBy?: Maybe<Array<BooksOrderBy>>;
};

/** All input for the create `PublicationAuthor` mutation. */
export type CreatePublicationAuthorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PublicationAuthor` to be created by this mutation. */
  publicationAuthor: PublicationAuthorInput;
};

/** The output of our create `PublicationAuthor` mutation. */
export type CreatePublicationAuthorPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PublicationAuthor` that was created by this mutation. */
  publicationAuthor?: Maybe<PublicationAuthor>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Publication` that is related to this `PublicationAuthor`. */
  publicationByPublicationId?: Maybe<Publication>;
  /** Reads a single `Author` that is related to this `PublicationAuthor`. */
  authorByAuthorId?: Maybe<Author>;
  /** An edge for our `PublicationAuthor`. May be used by Relay 1. */
  publicationAuthorEdge?: Maybe<PublicationAuthorsEdge>;
};


/** The output of our create `PublicationAuthor` mutation. */
export type CreatePublicationAuthorPayloadPublicationAuthorEdgeArgs = {
  orderBy?: Maybe<Array<PublicationAuthorsOrderBy>>;
};

/** All input for the create `Publication` mutation. */
export type CreatePublicationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Publication` to be created by this mutation. */
  publication: PublicationInput;
};

/** The output of our create `Publication` mutation. */
export type CreatePublicationPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Publication` that was created by this mutation. */
  publication?: Maybe<Publication>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Account` that is related to this `Publication`. */
  accountByAccountId?: Maybe<Account>;
  /** An edge for our `Publication`. May be used by Relay 1. */
  publicationEdge?: Maybe<PublicationsEdge>;
};


/** The output of our create `Publication` mutation. */
export type CreatePublicationPayloadPublicationEdgeArgs = {
  orderBy?: Maybe<Array<PublicationsOrderBy>>;
};

/** All input for the create `Tag` mutation. */
export type CreateTagInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Tag` to be created by this mutation. */
  tag: TagInput;
};

/** The output of our create `Tag` mutation. */
export type CreateTagPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Tag` that was created by this mutation. */
  tag?: Maybe<Tag>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Account` that is related to this `Tag`. */
  accountByAccountId?: Maybe<Account>;
  /** An edge for our `Tag`. May be used by Relay 1. */
  tagEdge?: Maybe<TagsEdge>;
};


/** The output of our create `Tag` mutation. */
export type CreateTagPayloadTagEdgeArgs = {
  orderBy?: Maybe<Array<TagsOrderBy>>;
};

export type CurrentAccount = {
  isLoggedIn?: Maybe<Scalars['Boolean']>;
  accessToken?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  sub?: Maybe<Scalars['String']>;
};




/** All input for the `deleteAccountByAccountId` mutation. */
export type DeleteAccountByAccountIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  accountId: Scalars['UUID'];
};

/** All input for the `deleteAccountByEmail` mutation. */
export type DeleteAccountByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  email: Scalars['String'];
};

/** All input for the `deleteAccount` mutation. */
export type DeleteAccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Account` to be deleted. */
  id: Scalars['ID'];
};

/** The output of our delete `Account` mutation. */
export type DeleteAccountPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Account` that was deleted by this mutation. */
  account?: Maybe<Account>;
  deletedAccountId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Account`. May be used by Relay 1. */
  accountEdge?: Maybe<AccountsEdge>;
};


/** The output of our delete `Account` mutation. */
export type DeleteAccountPayloadAccountEdgeArgs = {
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};

/** All input for the `deleteAnnotationByAnnotationId` mutation. */
export type DeleteAnnotationByAnnotationIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  annotationId: Scalars['String'];
};

/** All input for the `deleteAnnotationByPublicationIdAndAccountIdAndHighlightLocationAndHighlightText` mutation. */
export type DeleteAnnotationByPublicationIdAndAccountIdAndHighlightLocationAndHighlightTextInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  publicationId: Scalars['String'];
  accountId: Scalars['UUID'];
  highlightLocation: Scalars['JSON'];
  highlightText: Scalars['String'];
};

/** All input for the `deleteAnnotationByPublicationIdAndAccountIdAndNoteLocationAndNoteText` mutation. */
export type DeleteAnnotationByPublicationIdAndAccountIdAndNoteLocationAndNoteTextInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  publicationId: Scalars['String'];
  accountId: Scalars['UUID'];
  noteLocation: Scalars['JSON'];
  noteText: Scalars['String'];
};

/** All input for the `deleteAnnotation` mutation. */
export type DeleteAnnotationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Annotation` to be deleted. */
  id: Scalars['ID'];
};

/** The output of our delete `Annotation` mutation. */
export type DeleteAnnotationPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Annotation` that was deleted by this mutation. */
  annotation?: Maybe<Annotation>;
  deletedAnnotationId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Publication` that is related to this `Annotation`. */
  publicationByPublicationId?: Maybe<Publication>;
  /** Reads a single `Account` that is related to this `Annotation`. */
  accountByAccountId?: Maybe<Account>;
  /** An edge for our `Annotation`. May be used by Relay 1. */
  annotationEdge?: Maybe<AnnotationsEdge>;
};


/** The output of our delete `Annotation` mutation. */
export type DeleteAnnotationPayloadAnnotationEdgeArgs = {
  orderBy?: Maybe<Array<AnnotationsOrderBy>>;
};

/** All input for the `deleteAnnotationTagByAnnotationIdAndTagId` mutation. */
export type DeleteAnnotationTagByAnnotationIdAndTagIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  annotationId: Scalars['String'];
  tagId: Scalars['String'];
};

/** All input for the `deleteAnnotationTag` mutation. */
export type DeleteAnnotationTagInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `AnnotationTag` to be deleted. */
  id: Scalars['ID'];
};

/** The output of our delete `AnnotationTag` mutation. */
export type DeleteAnnotationTagPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `AnnotationTag` that was deleted by this mutation. */
  annotationTag?: Maybe<AnnotationTag>;
  deletedAnnotationTagId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Annotation` that is related to this `AnnotationTag`. */
  annotationByAnnotationId?: Maybe<Annotation>;
  /** Reads a single `Tag` that is related to this `AnnotationTag`. */
  tagByTagId?: Maybe<Tag>;
  /** An edge for our `AnnotationTag`. May be used by Relay 1. */
  annotationTagEdge?: Maybe<AnnotationTagsEdge>;
};


/** The output of our delete `AnnotationTag` mutation. */
export type DeleteAnnotationTagPayloadAnnotationTagEdgeArgs = {
  orderBy?: Maybe<Array<AnnotationTagsOrderBy>>;
};

/** All input for the `deleteAuthorByAccountIdAndFullName` mutation. */
export type DeleteAuthorByAccountIdAndFullNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  accountId: Scalars['UUID'];
  fullName: Scalars['String'];
};

/** All input for the `deleteAuthorByAuthorId` mutation. */
export type DeleteAuthorByAuthorIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  authorId: Scalars['String'];
};

/** All input for the `deleteAuthorByFullName` mutation. */
export type DeleteAuthorByFullNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  fullName: Scalars['String'];
};

/** All input for the `deleteAuthor` mutation. */
export type DeleteAuthorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Author` to be deleted. */
  id: Scalars['ID'];
};

/** The output of our delete `Author` mutation. */
export type DeleteAuthorPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Author` that was deleted by this mutation. */
  author?: Maybe<Author>;
  deletedAuthorId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Account` that is related to this `Author`. */
  accountByAccountId?: Maybe<Account>;
  /** An edge for our `Author`. May be used by Relay 1. */
  authorEdge?: Maybe<AuthorsEdge>;
};


/** The output of our delete `Author` mutation. */
export type DeleteAuthorPayloadAuthorEdgeArgs = {
  orderBy?: Maybe<Array<AuthorsOrderBy>>;
};

/** All input for the `deleteBookByPublicationId` mutation. */
export type DeleteBookByPublicationIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  publicationId: Scalars['String'];
};

/** All input for the `deleteBook` mutation. */
export type DeleteBookInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Book` to be deleted. */
  id: Scalars['ID'];
};

/** The output of our delete `Book` mutation. */
export type DeleteBookPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Book` that was deleted by this mutation. */
  book?: Maybe<Book>;
  deletedBookId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Publication` that is related to this `Book`. */
  publicationByPublicationId?: Maybe<Publication>;
  /** An edge for our `Book`. May be used by Relay 1. */
  bookEdge?: Maybe<BooksEdge>;
};


/** The output of our delete `Book` mutation. */
export type DeleteBookPayloadBookEdgeArgs = {
  orderBy?: Maybe<Array<BooksOrderBy>>;
};

/** All input for the `deletePublicationAuthorByPublicationIdAndAuthorId` mutation. */
export type DeletePublicationAuthorByPublicationIdAndAuthorIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  publicationId: Scalars['String'];
  authorId: Scalars['String'];
};

/** All input for the `deletePublicationAuthor` mutation. */
export type DeletePublicationAuthorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `PublicationAuthor` to be deleted. */
  id: Scalars['ID'];
};

/** The output of our delete `PublicationAuthor` mutation. */
export type DeletePublicationAuthorPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PublicationAuthor` that was deleted by this mutation. */
  publicationAuthor?: Maybe<PublicationAuthor>;
  deletedPublicationAuthorId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Publication` that is related to this `PublicationAuthor`. */
  publicationByPublicationId?: Maybe<Publication>;
  /** Reads a single `Author` that is related to this `PublicationAuthor`. */
  authorByAuthorId?: Maybe<Author>;
  /** An edge for our `PublicationAuthor`. May be used by Relay 1. */
  publicationAuthorEdge?: Maybe<PublicationAuthorsEdge>;
};


/** The output of our delete `PublicationAuthor` mutation. */
export type DeletePublicationAuthorPayloadPublicationAuthorEdgeArgs = {
  orderBy?: Maybe<Array<PublicationAuthorsOrderBy>>;
};

/** All input for the `deletePublicationByAccountIdAndTitle` mutation. */
export type DeletePublicationByAccountIdAndTitleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  accountId: Scalars['UUID'];
  title: Scalars['String'];
};

/** All input for the `deletePublicationByPublicationId` mutation. */
export type DeletePublicationByPublicationIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  publicationId: Scalars['String'];
};

/** All input for the `deletePublication` mutation. */
export type DeletePublicationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Publication` to be deleted. */
  id: Scalars['ID'];
};

/** The output of our delete `Publication` mutation. */
export type DeletePublicationPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Publication` that was deleted by this mutation. */
  publication?: Maybe<Publication>;
  deletedPublicationId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Account` that is related to this `Publication`. */
  accountByAccountId?: Maybe<Account>;
  /** An edge for our `Publication`. May be used by Relay 1. */
  publicationEdge?: Maybe<PublicationsEdge>;
};


/** The output of our delete `Publication` mutation. */
export type DeletePublicationPayloadPublicationEdgeArgs = {
  orderBy?: Maybe<Array<PublicationsOrderBy>>;
};

/** All input for the `deleteTagByAccountIdAndTagName` mutation. */
export type DeleteTagByAccountIdAndTagNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  accountId: Scalars['UUID'];
  tagName: Scalars['String'];
};

/** All input for the `deleteTagByTagId` mutation. */
export type DeleteTagByTagIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  tagId: Scalars['String'];
};

/** All input for the `deleteTag` mutation. */
export type DeleteTagInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Tag` to be deleted. */
  id: Scalars['ID'];
};

/** The output of our delete `Tag` mutation. */
export type DeleteTagPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Tag` that was deleted by this mutation. */
  tag?: Maybe<Tag>;
  deletedTagId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Account` that is related to this `Tag`. */
  accountByAccountId?: Maybe<Account>;
  /** An edge for our `Tag`. May be used by Relay 1. */
  tagEdge?: Maybe<TagsEdge>;
};


/** The output of our delete `Tag` mutation. */
export type DeleteTagPayloadTagEdgeArgs = {
  orderBy?: Maybe<Array<TagsOrderBy>>;
};


/** A filter to be used against FullText fields. All fields are combined with a logical ‘and.’ */
export type FullTextFilter = {
  /** Performs a full text search on the field. */
  matches?: Maybe<Scalars['String']>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  /** Creates a single `Account`. */
  createAccount?: Maybe<CreateAccountPayload>;
  /** Creates a single `Annotation`. */
  createAnnotation?: Maybe<CreateAnnotationPayload>;
  /** Creates a single `AnnotationTag`. */
  createAnnotationTag?: Maybe<CreateAnnotationTagPayload>;
  /** Creates a single `Author`. */
  createAuthor?: Maybe<CreateAuthorPayload>;
  /** Creates a single `Book`. */
  createBook?: Maybe<CreateBookPayload>;
  /** Creates a single `Publication`. */
  createPublication?: Maybe<CreatePublicationPayload>;
  /** Creates a single `PublicationAuthor`. */
  createPublicationAuthor?: Maybe<CreatePublicationAuthorPayload>;
  /** Creates a single `Tag`. */
  createTag?: Maybe<CreateTagPayload>;
  /** Updates a single `Account` using its globally unique id and a patch. */
  updateAccount?: Maybe<UpdateAccountPayload>;
  /** Updates a single `Account` using a unique key and a patch. */
  updateAccountByAccountId?: Maybe<UpdateAccountPayload>;
  /** Updates a single `Account` using a unique key and a patch. */
  updateAccountByEmail?: Maybe<UpdateAccountPayload>;
  /** Updates a single `Annotation` using its globally unique id and a patch. */
  updateAnnotation?: Maybe<UpdateAnnotationPayload>;
  /** Updates a single `Annotation` using a unique key and a patch. */
  updateAnnotationByAnnotationId?: Maybe<UpdateAnnotationPayload>;
  /** Updates a single `Annotation` using a unique key and a patch. */
  updateAnnotationByPublicationIdAndAccountIdAndHighlightLocationAndHighlightText?: Maybe<UpdateAnnotationPayload>;
  /** Updates a single `Annotation` using a unique key and a patch. */
  updateAnnotationByPublicationIdAndAccountIdAndNoteLocationAndNoteText?: Maybe<UpdateAnnotationPayload>;
  /** Updates a single `AnnotationTag` using its globally unique id and a patch. */
  updateAnnotationTag?: Maybe<UpdateAnnotationTagPayload>;
  /** Updates a single `AnnotationTag` using a unique key and a patch. */
  updateAnnotationTagByAnnotationIdAndTagId?: Maybe<UpdateAnnotationTagPayload>;
  /** Updates a single `Author` using its globally unique id and a patch. */
  updateAuthor?: Maybe<UpdateAuthorPayload>;
  /** Updates a single `Author` using a unique key and a patch. */
  updateAuthorByAuthorId?: Maybe<UpdateAuthorPayload>;
  /** Updates a single `Author` using a unique key and a patch. */
  updateAuthorByFullName?: Maybe<UpdateAuthorPayload>;
  /** Updates a single `Author` using a unique key and a patch. */
  updateAuthorByAccountIdAndFullName?: Maybe<UpdateAuthorPayload>;
  /** Updates a single `Book` using its globally unique id and a patch. */
  updateBook?: Maybe<UpdateBookPayload>;
  /** Updates a single `Book` using a unique key and a patch. */
  updateBookByPublicationId?: Maybe<UpdateBookPayload>;
  /** Updates a single `Publication` using its globally unique id and a patch. */
  updatePublication?: Maybe<UpdatePublicationPayload>;
  /** Updates a single `Publication` using a unique key and a patch. */
  updatePublicationByPublicationId?: Maybe<UpdatePublicationPayload>;
  /** Updates a single `Publication` using a unique key and a patch. */
  updatePublicationByAccountIdAndTitle?: Maybe<UpdatePublicationPayload>;
  /** Updates a single `PublicationAuthor` using its globally unique id and a patch. */
  updatePublicationAuthor?: Maybe<UpdatePublicationAuthorPayload>;
  /** Updates a single `PublicationAuthor` using a unique key and a patch. */
  updatePublicationAuthorByPublicationIdAndAuthorId?: Maybe<UpdatePublicationAuthorPayload>;
  /** Updates a single `Tag` using its globally unique id and a patch. */
  updateTag?: Maybe<UpdateTagPayload>;
  /** Updates a single `Tag` using a unique key and a patch. */
  updateTagByTagId?: Maybe<UpdateTagPayload>;
  /** Updates a single `Tag` using a unique key and a patch. */
  updateTagByAccountIdAndTagName?: Maybe<UpdateTagPayload>;
  /** Deletes a single `Account` using its globally unique id. */
  deleteAccount?: Maybe<DeleteAccountPayload>;
  /** Deletes a single `Account` using a unique key. */
  deleteAccountByAccountId?: Maybe<DeleteAccountPayload>;
  /** Deletes a single `Account` using a unique key. */
  deleteAccountByEmail?: Maybe<DeleteAccountPayload>;
  /** Deletes a single `Annotation` using its globally unique id. */
  deleteAnnotation?: Maybe<DeleteAnnotationPayload>;
  /** Deletes a single `Annotation` using a unique key. */
  deleteAnnotationByAnnotationId?: Maybe<DeleteAnnotationPayload>;
  /** Deletes a single `Annotation` using a unique key. */
  deleteAnnotationByPublicationIdAndAccountIdAndHighlightLocationAndHighlightText?: Maybe<DeleteAnnotationPayload>;
  /** Deletes a single `Annotation` using a unique key. */
  deleteAnnotationByPublicationIdAndAccountIdAndNoteLocationAndNoteText?: Maybe<DeleteAnnotationPayload>;
  /** Deletes a single `AnnotationTag` using its globally unique id. */
  deleteAnnotationTag?: Maybe<DeleteAnnotationTagPayload>;
  /** Deletes a single `AnnotationTag` using a unique key. */
  deleteAnnotationTagByAnnotationIdAndTagId?: Maybe<DeleteAnnotationTagPayload>;
  /** Deletes a single `Author` using its globally unique id. */
  deleteAuthor?: Maybe<DeleteAuthorPayload>;
  /** Deletes a single `Author` using a unique key. */
  deleteAuthorByAuthorId?: Maybe<DeleteAuthorPayload>;
  /** Deletes a single `Author` using a unique key. */
  deleteAuthorByFullName?: Maybe<DeleteAuthorPayload>;
  /** Deletes a single `Author` using a unique key. */
  deleteAuthorByAccountIdAndFullName?: Maybe<DeleteAuthorPayload>;
  /** Deletes a single `Book` using its globally unique id. */
  deleteBook?: Maybe<DeleteBookPayload>;
  /** Deletes a single `Book` using a unique key. */
  deleteBookByPublicationId?: Maybe<DeleteBookPayload>;
  /** Deletes a single `Publication` using its globally unique id. */
  deletePublication?: Maybe<DeletePublicationPayload>;
  /** Deletes a single `Publication` using a unique key. */
  deletePublicationByPublicationId?: Maybe<DeletePublicationPayload>;
  /** Deletes a single `Publication` using a unique key. */
  deletePublicationByAccountIdAndTitle?: Maybe<DeletePublicationPayload>;
  /** Deletes a single `PublicationAuthor` using its globally unique id. */
  deletePublicationAuthor?: Maybe<DeletePublicationAuthorPayload>;
  /** Deletes a single `PublicationAuthor` using a unique key. */
  deletePublicationAuthorByPublicationIdAndAuthorId?: Maybe<DeletePublicationAuthorPayload>;
  /** Deletes a single `Tag` using its globally unique id. */
  deleteTag?: Maybe<DeleteTagPayload>;
  /** Deletes a single `Tag` using a unique key. */
  deleteTagByTagId?: Maybe<DeleteTagPayload>;
  /** Deletes a single `Tag` using a unique key. */
  deleteTagByAccountIdAndTagName?: Maybe<DeleteTagPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAnnotationArgs = {
  input: CreateAnnotationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAnnotationTagArgs = {
  input: CreateAnnotationTagInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAuthorArgs = {
  input: CreateAuthorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBookArgs = {
  input: CreateBookInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePublicationArgs = {
  input: CreatePublicationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePublicationAuthorArgs = {
  input: CreatePublicationAuthorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTagArgs = {
  input: CreateTagInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountArgs = {
  input: UpdateAccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountByAccountIdArgs = {
  input: UpdateAccountByAccountIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAccountByEmailArgs = {
  input: UpdateAccountByEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAnnotationArgs = {
  input: UpdateAnnotationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAnnotationByAnnotationIdArgs = {
  input: UpdateAnnotationByAnnotationIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAnnotationByPublicationIdAndAccountIdAndHighlightLocationAndHighlightTextArgs = {
  input: UpdateAnnotationByPublicationIdAndAccountIdAndHighlightLocationAndHighlightTextInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAnnotationByPublicationIdAndAccountIdAndNoteLocationAndNoteTextArgs = {
  input: UpdateAnnotationByPublicationIdAndAccountIdAndNoteLocationAndNoteTextInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAnnotationTagArgs = {
  input: UpdateAnnotationTagInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAnnotationTagByAnnotationIdAndTagIdArgs = {
  input: UpdateAnnotationTagByAnnotationIdAndTagIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAuthorArgs = {
  input: UpdateAuthorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAuthorByAuthorIdArgs = {
  input: UpdateAuthorByAuthorIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAuthorByFullNameArgs = {
  input: UpdateAuthorByFullNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAuthorByAccountIdAndFullNameArgs = {
  input: UpdateAuthorByAccountIdAndFullNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBookArgs = {
  input: UpdateBookInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBookByPublicationIdArgs = {
  input: UpdateBookByPublicationIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePublicationArgs = {
  input: UpdatePublicationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePublicationByPublicationIdArgs = {
  input: UpdatePublicationByPublicationIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePublicationByAccountIdAndTitleArgs = {
  input: UpdatePublicationByAccountIdAndTitleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePublicationAuthorArgs = {
  input: UpdatePublicationAuthorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePublicationAuthorByPublicationIdAndAuthorIdArgs = {
  input: UpdatePublicationAuthorByPublicationIdAndAuthorIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTagArgs = {
  input: UpdateTagInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTagByTagIdArgs = {
  input: UpdateTagByTagIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTagByAccountIdAndTagNameArgs = {
  input: UpdateTagByAccountIdAndTagNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountArgs = {
  input: DeleteAccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountByAccountIdArgs = {
  input: DeleteAccountByAccountIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAccountByEmailArgs = {
  input: DeleteAccountByEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAnnotationArgs = {
  input: DeleteAnnotationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAnnotationByAnnotationIdArgs = {
  input: DeleteAnnotationByAnnotationIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAnnotationByPublicationIdAndAccountIdAndHighlightLocationAndHighlightTextArgs = {
  input: DeleteAnnotationByPublicationIdAndAccountIdAndHighlightLocationAndHighlightTextInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAnnotationByPublicationIdAndAccountIdAndNoteLocationAndNoteTextArgs = {
  input: DeleteAnnotationByPublicationIdAndAccountIdAndNoteLocationAndNoteTextInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAnnotationTagArgs = {
  input: DeleteAnnotationTagInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAnnotationTagByAnnotationIdAndTagIdArgs = {
  input: DeleteAnnotationTagByAnnotationIdAndTagIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAuthorArgs = {
  input: DeleteAuthorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAuthorByAuthorIdArgs = {
  input: DeleteAuthorByAuthorIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAuthorByFullNameArgs = {
  input: DeleteAuthorByFullNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAuthorByAccountIdAndFullNameArgs = {
  input: DeleteAuthorByAccountIdAndFullNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBookArgs = {
  input: DeleteBookInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBookByPublicationIdArgs = {
  input: DeleteBookByPublicationIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePublicationArgs = {
  input: DeletePublicationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePublicationByPublicationIdArgs = {
  input: DeletePublicationByPublicationIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePublicationByAccountIdAndTitleArgs = {
  input: DeletePublicationByAccountIdAndTitleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePublicationAuthorArgs = {
  input: DeletePublicationAuthorInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePublicationAuthorByPublicationIdAndAuthorIdArgs = {
  input: DeletePublicationAuthorByPublicationIdAndAuthorIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTagArgs = {
  input: DeleteTagInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTagByTagIdArgs = {
  input: DeleteTagByTagIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTagByAccountIdAndTagNameArgs = {
  input: DeleteTagByAccountIdAndTagNameInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
};

export type Publication = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
  publicationId: Scalars['String'];
  accountId: Scalars['UUID'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  title: Scalars['String'];
  additionalMeta?: Maybe<Scalars['JSON']>;
  /** Reads a single `Account` that is related to this `Publication`. */
  accountByAccountId?: Maybe<Account>;
  /** Reads a single `Book` that is related to this `Publication`. */
  bookByPublicationId?: Maybe<Book>;
  /**
   * Reads and enables pagination through a set of `Book`.
   * @deprecated Please use bookByPublicationId instead
   */
  booksByPublicationId: BooksConnection;
  /** Reads and enables pagination through a set of `Annotation`. */
  annotationsByPublicationId: AnnotationsConnection;
  /** Reads and enables pagination through a set of `PublicationAuthor`. */
  publicationAuthorsByPublicationId: PublicationAuthorsConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByAnnotationPublicationIdAndAccountId: PublicationAccountsByAnnotationPublicationIdAndAccountIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Author`. */
  authorsByPublicationAuthorPublicationIdAndAuthorId: PublicationAuthorsByPublicationAuthorPublicationIdAndAuthorIdManyToManyConnection;
};


export type PublicationBooksByPublicationIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<BooksOrderBy>>;
  condition?: Maybe<BookCondition>;
  filter?: Maybe<BookFilter>;
};


export type PublicationAnnotationsByPublicationIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AnnotationsOrderBy>>;
  condition?: Maybe<AnnotationCondition>;
  filter?: Maybe<AnnotationFilter>;
};


export type PublicationPublicationAuthorsByPublicationIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PublicationAuthorsOrderBy>>;
  condition?: Maybe<PublicationAuthorCondition>;
  filter?: Maybe<PublicationAuthorFilter>;
};


export type PublicationAccountsByAnnotationPublicationIdAndAccountIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
  condition?: Maybe<AccountCondition>;
  filter?: Maybe<AccountFilter>;
};


export type PublicationAuthorsByPublicationAuthorPublicationIdAndAuthorIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AuthorsOrderBy>>;
  condition?: Maybe<AuthorCondition>;
  filter?: Maybe<AuthorFilter>;
};

/** The `account` to be created by this mutation. */
export type PublicationAccountIdFkeyAccountCreateInput = {
  email: Scalars['String'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  status?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  group?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  publicationsUsingAccountId?: Maybe<PublicationAccountIdFkeyInverseInput>;
  annotationsUsingAccountId?: Maybe<AnnotationAccountIdFkeyInverseInput>;
  authorsUsingAccountId?: Maybe<AuthorAccountIdFkeyInverseInput>;
  tagsUsingAccountId?: Maybe<TagAccountIdFkeyInverseInput>;
};

/** Input for the nested mutation of `account` in the `PublicationInput` mutation. */
export type PublicationAccountIdFkeyInput = {
  /** The primary key(s) for `account` for the far side of the relationship. */
  connectByAccountId?: Maybe<AccountAccountPkeyConnect>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  connectByEmail?: Maybe<AccountAccountEmailKeyConnect>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  connectById?: Maybe<AccountNodeIdConnect>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  deleteByAccountId?: Maybe<AccountAccountPkeyDelete>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  deleteByEmail?: Maybe<AccountAccountEmailKeyDelete>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  deleteById?: Maybe<AccountNodeIdDelete>;
  /** The primary key(s) and patch data for `account` for the far side of the relationship. */
  updateByAccountId?: Maybe<AccountOnPublicationForPublicationAccountIdFkeyUsingAccountPkeyUpdate>;
  /** The primary key(s) and patch data for `account` for the far side of the relationship. */
  updateByEmail?: Maybe<AccountOnPublicationForPublicationAccountIdFkeyUsingAccountEmailKeyUpdate>;
  /** The primary key(s) and patch data for `account` for the far side of the relationship. */
  updateById?: Maybe<PublicationOnPublicationForPublicationAccountIdFkeyNodeIdUpdate>;
  /** A `AccountInput` object that will be created and connected to this object. */
  create?: Maybe<PublicationAccountIdFkeyAccountCreateInput>;
};

/** Input for the nested mutation of `publication` in the `AccountInput` mutation. */
export type PublicationAccountIdFkeyInverseInput = {
  /** Flag indicating whether all other `publication` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `publication` for the far side of the relationship. */
  connectByPublicationId?: Maybe<Array<PublicationPublicationPkeyConnect>>;
  /** The primary key(s) for `publication` for the far side of the relationship. */
  connectByAccountIdAndTitle?: Maybe<Array<PublicationPublicationAccountIdTitleKeyConnect>>;
  /** The primary key(s) for `publication` for the far side of the relationship. */
  connectById?: Maybe<Array<PublicationNodeIdConnect>>;
  /** The primary key(s) for `publication` for the far side of the relationship. */
  deleteByPublicationId?: Maybe<Array<PublicationPublicationPkeyDelete>>;
  /** The primary key(s) for `publication` for the far side of the relationship. */
  deleteByAccountIdAndTitle?: Maybe<Array<PublicationPublicationAccountIdTitleKeyDelete>>;
  /** The primary key(s) for `publication` for the far side of the relationship. */
  deleteById?: Maybe<Array<PublicationNodeIdDelete>>;
  /** The primary key(s) and patch data for `publication` for the far side of the relationship. */
  updateByPublicationId?: Maybe<Array<PublicationOnPublicationForPublicationAccountIdFkeyUsingPublicationPkeyUpdate>>;
  /** The primary key(s) and patch data for `publication` for the far side of the relationship. */
  updateByAccountIdAndTitle?: Maybe<Array<PublicationOnPublicationForPublicationAccountIdFkeyUsingPublicationAccountIdTitleKeyUpdate>>;
  /** The primary key(s) and patch data for `publication` for the far side of the relationship. */
  updateById?: Maybe<Array<AccountOnPublicationForPublicationAccountIdFkeyNodeIdUpdate>>;
  /** A `PublicationInput` object that will be created and connected to this object. */
  create?: Maybe<Array<PublicationAccountIdFkeyPublicationCreateInput>>;
};

/** The `publication` to be created by this mutation. */
export type PublicationAccountIdFkeyPublicationCreateInput = {
  publicationId: Scalars['String'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  title: Scalars['String'];
  additionalMeta?: Maybe<Scalars['JSON']>;
  accountToAccountId?: Maybe<PublicationAccountIdFkeyInput>;
  bookUsingPublicationId?: Maybe<BookPublicationIdFkeyInverseInput>;
  annotationsUsingPublicationId?: Maybe<AnnotationPublicationIdFkeyInverseInput>;
  publicationAuthorsUsingPublicationId?: Maybe<PublicationAuthorPublicationIdFkeyInverseInput>;
};

/** A connection to a list of `Account` values, with data from `Annotation`. */
export type PublicationAccountsByAnnotationPublicationIdAndAccountIdManyToManyConnection = {
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** A list of edges which contains the `Account`, info from the `Annotation`, and the cursor to aid in pagination. */
  edges: Array<PublicationAccountsByAnnotationPublicationIdAndAccountIdManyToManyEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Account` edge in the connection, with data from `Annotation`. */
export type PublicationAccountsByAnnotationPublicationIdAndAccountIdManyToManyEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
  /** Reads and enables pagination through a set of `Annotation`. */
  annotationsByAccountId: AnnotationsConnection;
};


/** A `Account` edge in the connection, with data from `Annotation`. */
export type PublicationAccountsByAnnotationPublicationIdAndAccountIdManyToManyEdgeAnnotationsByAccountIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AnnotationsOrderBy>>;
  condition?: Maybe<AnnotationCondition>;
  filter?: Maybe<AnnotationFilter>;
};

export type PublicationAuthor = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
  publicationId: Scalars['String'];
  authorId: Scalars['String'];
  /** Reads a single `Publication` that is related to this `PublicationAuthor`. */
  publicationByPublicationId?: Maybe<Publication>;
  /** Reads a single `Author` that is related to this `PublicationAuthor`. */
  authorByAuthorId?: Maybe<Author>;
};

/** The `author` to be created by this mutation. */
export type PublicationAuthorAuthorIdFkeyAuthorCreateInput = {
  fullName: Scalars['String'];
  accountId?: Maybe<Scalars['UUID']>;
  accountToAccountId?: Maybe<AuthorAccountIdFkeyInput>;
  publicationAuthorsUsingAuthorId?: Maybe<PublicationAuthorAuthorIdFkeyInverseInput>;
};

/** Input for the nested mutation of `author` in the `PublicationAuthorInput` mutation. */
export type PublicationAuthorAuthorIdFkeyInput = {
  /** The primary key(s) for `author` for the far side of the relationship. */
  connectByAuthorId?: Maybe<AuthorAuthorPkeyConnect>;
  /** The primary key(s) for `author` for the far side of the relationship. */
  connectByFullName?: Maybe<AuthorAuthorFullNameKeyConnect>;
  /** The primary key(s) for `author` for the far side of the relationship. */
  connectByAccountIdAndFullName?: Maybe<AuthorNoDuplicateAuthorsPerAccountConnect>;
  /** The primary key(s) for `author` for the far side of the relationship. */
  connectById?: Maybe<AuthorNodeIdConnect>;
  /** The primary key(s) for `author` for the far side of the relationship. */
  deleteByAuthorId?: Maybe<AuthorAuthorPkeyDelete>;
  /** The primary key(s) for `author` for the far side of the relationship. */
  deleteByFullName?: Maybe<AuthorAuthorFullNameKeyDelete>;
  /** The primary key(s) for `author` for the far side of the relationship. */
  deleteByAccountIdAndFullName?: Maybe<AuthorNoDuplicateAuthorsPerAccountDelete>;
  /** The primary key(s) for `author` for the far side of the relationship. */
  deleteById?: Maybe<AuthorNodeIdDelete>;
  /** The primary key(s) and patch data for `author` for the far side of the relationship. */
  updateByAuthorId?: Maybe<AuthorOnPublicationAuthorForPublicationAuthorAuthorIdFkeyUsingAuthorPkeyUpdate>;
  /** The primary key(s) and patch data for `author` for the far side of the relationship. */
  updateByFullName?: Maybe<AuthorOnPublicationAuthorForPublicationAuthorAuthorIdFkeyUsingAuthorFullNameKeyUpdate>;
  /** The primary key(s) and patch data for `author` for the far side of the relationship. */
  updateByAccountIdAndFullName?: Maybe<AuthorOnPublicationAuthorForPublicationAuthorAuthorIdFkeyUsingNoDuplicateAuthorsPerAccountUpdate>;
  /** The primary key(s) and patch data for `author` for the far side of the relationship. */
  updateById?: Maybe<PublicationAuthorOnPublicationAuthorForPublicationAuthorAuthorIdFkeyNodeIdUpdate>;
  /** A `AuthorInput` object that will be created and connected to this object. */
  create?: Maybe<PublicationAuthorAuthorIdFkeyAuthorCreateInput>;
};

/** Input for the nested mutation of `publicationAuthor` in the `AuthorInput` mutation. */
export type PublicationAuthorAuthorIdFkeyInverseInput = {
  /** Flag indicating whether all other `publicationAuthor` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `publicationAuthor` for the far side of the relationship. */
  connectByPublicationIdAndAuthorId?: Maybe<Array<PublicationAuthorPublicationAuthorPkeyConnect>>;
  /** The primary key(s) for `publicationAuthor` for the far side of the relationship. */
  connectById?: Maybe<Array<PublicationAuthorNodeIdConnect>>;
  /** The primary key(s) for `publicationAuthor` for the far side of the relationship. */
  deleteByPublicationIdAndAuthorId?: Maybe<Array<PublicationAuthorPublicationAuthorPkeyDelete>>;
  /** The primary key(s) for `publicationAuthor` for the far side of the relationship. */
  deleteById?: Maybe<Array<PublicationAuthorNodeIdDelete>>;
  /** The primary key(s) and patch data for `publicationAuthor` for the far side of the relationship. */
  updateByPublicationIdAndAuthorId?: Maybe<Array<PublicationAuthorOnPublicationAuthorForPublicationAuthorAuthorIdFkeyUsingPublicationAuthorPkeyUpdate>>;
  /** The primary key(s) and patch data for `publicationAuthor` for the far side of the relationship. */
  updateById?: Maybe<Array<AuthorOnPublicationAuthorForPublicationAuthorAuthorIdFkeyNodeIdUpdate>>;
  /** A `PublicationAuthorInput` object that will be created and connected to this object. */
  create?: Maybe<Array<PublicationAuthorAuthorIdFkeyPublicationAuthorCreateInput>>;
};

/** The `publicationAuthor` to be created by this mutation. */
export type PublicationAuthorAuthorIdFkeyPublicationAuthorCreateInput = {
  publicationId?: Maybe<Scalars['String']>;
  publicationToPublicationId?: Maybe<PublicationAuthorPublicationIdFkeyInput>;
  authorToAuthorId?: Maybe<PublicationAuthorAuthorIdFkeyInput>;
};

/**
 * A condition to be used against `PublicationAuthor` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PublicationAuthorCondition = {
  /** Checks for equality with the object’s `publicationId` field. */
  publicationId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `authorId` field. */
  authorId?: Maybe<Scalars['String']>;
};

/** A filter to be used against `PublicationAuthor` object types. All fields are combined with a logical ‘and.’ */
export type PublicationAuthorFilter = {
  /** Filter by the object’s `publicationId` field. */
  publicationId?: Maybe<StringFilter>;
  /** Filter by the object’s `authorId` field. */
  authorId?: Maybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<PublicationAuthorFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<PublicationAuthorFilter>>;
  /** Negates the expression. */
  not?: Maybe<PublicationAuthorFilter>;
};

/** An input for mutations affecting `PublicationAuthor` */
export type PublicationAuthorInput = {
  publicationId?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['String']>;
  publicationToPublicationId?: Maybe<PublicationAuthorPublicationIdFkeyInput>;
  authorToAuthorId?: Maybe<PublicationAuthorAuthorIdFkeyInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type PublicationAuthorNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `publicationAuthor` to be connected. */
  id: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type PublicationAuthorNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `publicationAuthor` to be deleted. */
  id: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type PublicationAuthorOnPublicationAuthorForPublicationAuthorAuthorIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `author` to be connected. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `author` being updated. */
  authorPatch: AuthorPatch;
};

/** The fields on `publicationAuthor` to look up the row to update. */
export type PublicationAuthorOnPublicationAuthorForPublicationAuthorAuthorIdFkeyUsingPublicationAuthorPkeyUpdate = {
  /** An object where the defined keys will be set on the `publicationAuthor` being updated. */
  publicationAuthorPatch: UpdatePublicationAuthorOnPublicationAuthorForPublicationAuthorAuthorIdFkeyPatch;
  publicationId: Scalars['String'];
  authorId: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type PublicationAuthorOnPublicationAuthorForPublicationAuthorPublicationIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `publication` to be connected. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `publication` being updated. */
  publicationPatch: PublicationPatch;
};

/** The fields on `publicationAuthor` to look up the row to update. */
export type PublicationAuthorOnPublicationAuthorForPublicationAuthorPublicationIdFkeyUsingPublicationAuthorPkeyUpdate = {
  /** An object where the defined keys will be set on the `publicationAuthor` being updated. */
  publicationAuthorPatch: UpdatePublicationAuthorOnPublicationAuthorForPublicationAuthorPublicationIdFkeyPatch;
  publicationId: Scalars['String'];
  authorId: Scalars['String'];
};

/** Represents an update to a `PublicationAuthor`. Fields that are set will be updated. */
export type PublicationAuthorPatch = {
  publicationId?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['String']>;
  publicationToPublicationId?: Maybe<PublicationAuthorPublicationIdFkeyInput>;
  authorToAuthorId?: Maybe<PublicationAuthorAuthorIdFkeyInput>;
};

/** The fields on `publicationAuthor` to look up the row to connect. */
export type PublicationAuthorPublicationAuthorPkeyConnect = {
  publicationId: Scalars['String'];
  authorId: Scalars['String'];
};

/** The fields on `publicationAuthor` to look up the row to delete. */
export type PublicationAuthorPublicationAuthorPkeyDelete = {
  publicationId: Scalars['String'];
  authorId: Scalars['String'];
};

/** Input for the nested mutation of `publication` in the `PublicationAuthorInput` mutation. */
export type PublicationAuthorPublicationIdFkeyInput = {
  /** The primary key(s) for `publication` for the far side of the relationship. */
  connectByPublicationId?: Maybe<PublicationPublicationPkeyConnect>;
  /** The primary key(s) for `publication` for the far side of the relationship. */
  connectByAccountIdAndTitle?: Maybe<PublicationPublicationAccountIdTitleKeyConnect>;
  /** The primary key(s) for `publication` for the far side of the relationship. */
  connectById?: Maybe<PublicationNodeIdConnect>;
  /** The primary key(s) for `publication` for the far side of the relationship. */
  deleteByPublicationId?: Maybe<PublicationPublicationPkeyDelete>;
  /** The primary key(s) for `publication` for the far side of the relationship. */
  deleteByAccountIdAndTitle?: Maybe<PublicationPublicationAccountIdTitleKeyDelete>;
  /** The primary key(s) for `publication` for the far side of the relationship. */
  deleteById?: Maybe<PublicationNodeIdDelete>;
  /** The primary key(s) and patch data for `publication` for the far side of the relationship. */
  updateByPublicationId?: Maybe<PublicationOnPublicationAuthorForPublicationAuthorPublicationIdFkeyUsingPublicationPkeyUpdate>;
  /** The primary key(s) and patch data for `publication` for the far side of the relationship. */
  updateByAccountIdAndTitle?: Maybe<PublicationOnPublicationAuthorForPublicationAuthorPublicationIdFkeyUsingPublicationAccountIdTitleKeyUpdate>;
  /** The primary key(s) and patch data for `publication` for the far side of the relationship. */
  updateById?: Maybe<PublicationAuthorOnPublicationAuthorForPublicationAuthorPublicationIdFkeyNodeIdUpdate>;
  /** A `PublicationInput` object that will be created and connected to this object. */
  create?: Maybe<PublicationAuthorPublicationIdFkeyPublicationCreateInput>;
};

/** Input for the nested mutation of `publicationAuthor` in the `PublicationInput` mutation. */
export type PublicationAuthorPublicationIdFkeyInverseInput = {
  /** Flag indicating whether all other `publicationAuthor` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `publicationAuthor` for the far side of the relationship. */
  connectByPublicationIdAndAuthorId?: Maybe<Array<PublicationAuthorPublicationAuthorPkeyConnect>>;
  /** The primary key(s) for `publicationAuthor` for the far side of the relationship. */
  connectById?: Maybe<Array<PublicationAuthorNodeIdConnect>>;
  /** The primary key(s) for `publicationAuthor` for the far side of the relationship. */
  deleteByPublicationIdAndAuthorId?: Maybe<Array<PublicationAuthorPublicationAuthorPkeyDelete>>;
  /** The primary key(s) for `publicationAuthor` for the far side of the relationship. */
  deleteById?: Maybe<Array<PublicationAuthorNodeIdDelete>>;
  /** The primary key(s) and patch data for `publicationAuthor` for the far side of the relationship. */
  updateByPublicationIdAndAuthorId?: Maybe<Array<PublicationAuthorOnPublicationAuthorForPublicationAuthorPublicationIdFkeyUsingPublicationAuthorPkeyUpdate>>;
  /** The primary key(s) and patch data for `publicationAuthor` for the far side of the relationship. */
  updateById?: Maybe<Array<PublicationOnPublicationAuthorForPublicationAuthorPublicationIdFkeyNodeIdUpdate>>;
  /** A `PublicationAuthorInput` object that will be created and connected to this object. */
  create?: Maybe<Array<PublicationAuthorPublicationIdFkeyPublicationAuthorCreateInput>>;
};

/** The `publicationAuthor` to be created by this mutation. */
export type PublicationAuthorPublicationIdFkeyPublicationAuthorCreateInput = {
  authorId?: Maybe<Scalars['String']>;
  publicationToPublicationId?: Maybe<PublicationAuthorPublicationIdFkeyInput>;
  authorToAuthorId?: Maybe<PublicationAuthorAuthorIdFkeyInput>;
};

/** The `publication` to be created by this mutation. */
export type PublicationAuthorPublicationIdFkeyPublicationCreateInput = {
  accountId?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  title: Scalars['String'];
  additionalMeta?: Maybe<Scalars['JSON']>;
  accountToAccountId?: Maybe<PublicationAccountIdFkeyInput>;
  bookUsingPublicationId?: Maybe<BookPublicationIdFkeyInverseInput>;
  annotationsUsingPublicationId?: Maybe<AnnotationPublicationIdFkeyInverseInput>;
  publicationAuthorsUsingPublicationId?: Maybe<PublicationAuthorPublicationIdFkeyInverseInput>;
};

/** A connection to a list of `Author` values, with data from `PublicationAuthor`. */
export type PublicationAuthorsByPublicationAuthorPublicationIdAndAuthorIdManyToManyConnection = {
  /** A list of `Author` objects. */
  nodes: Array<Maybe<Author>>;
  /** A list of edges which contains the `Author`, info from the `PublicationAuthor`, and the cursor to aid in pagination. */
  edges: Array<PublicationAuthorsByPublicationAuthorPublicationIdAndAuthorIdManyToManyEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Author` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Author` edge in the connection, with data from `PublicationAuthor`. */
export type PublicationAuthorsByPublicationAuthorPublicationIdAndAuthorIdManyToManyEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Author` at the end of the edge. */
  node?: Maybe<Author>;
};

/** A connection to a list of `PublicationAuthor` values. */
export type PublicationAuthorsConnection = {
  /** A list of `PublicationAuthor` objects. */
  nodes: Array<Maybe<PublicationAuthor>>;
  /** A list of edges which contains the `PublicationAuthor` and cursor to aid in pagination. */
  edges: Array<PublicationAuthorsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PublicationAuthor` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `PublicationAuthor` edge in the connection. */
export type PublicationAuthorsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `PublicationAuthor` at the end of the edge. */
  node?: Maybe<PublicationAuthor>;
};

/** Methods to use when ordering `PublicationAuthor`. */
export enum PublicationAuthorsOrderBy {
  Natural = 'NATURAL',
  PublicationIdAsc = 'PUBLICATION_ID_ASC',
  PublicationIdDesc = 'PUBLICATION_ID_DESC',
  AuthorIdAsc = 'AUTHOR_ID_ASC',
  AuthorIdDesc = 'AUTHOR_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/**
 * A condition to be used against `Publication` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type PublicationCondition = {
  /** Checks for equality with the object’s `publicationId` field. */
  publicationId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: Maybe<Scalars['UUID']>;
};

/** A filter to be used against `Publication` object types. All fields are combined with a logical ‘and.’ */
export type PublicationFilter = {
  /** Filter by the object’s `publicationId` field. */
  publicationId?: Maybe<StringFilter>;
  /** Filter by the object’s `accountId` field. */
  accountId?: Maybe<UuidFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<PublicationFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<PublicationFilter>>;
  /** Negates the expression. */
  not?: Maybe<PublicationFilter>;
};

/** An input for mutations affecting `Publication` */
export type PublicationInput = {
  publicationId: Scalars['String'];
  accountId?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  title: Scalars['String'];
  additionalMeta?: Maybe<Scalars['JSON']>;
  accountToAccountId?: Maybe<PublicationAccountIdFkeyInput>;
  bookUsingPublicationId?: Maybe<BookPublicationIdFkeyInverseInput>;
  annotationsUsingPublicationId?: Maybe<AnnotationPublicationIdFkeyInverseInput>;
  publicationAuthorsUsingPublicationId?: Maybe<PublicationAuthorPublicationIdFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type PublicationNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `publication` to be connected. */
  id: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type PublicationNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `publication` to be deleted. */
  id: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to update. */
export type PublicationOnAnnotationForAnnotationPublicationIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `annotation` to be connected. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `annotation` being updated. */
  annotationPatch: AnnotationPatch;
};

/** The fields on `publication` to look up the row to update. */
export type PublicationOnAnnotationForAnnotationPublicationIdFkeyUsingPublicationAccountIdTitleKeyUpdate = {
  /** An object where the defined keys will be set on the `publication` being updated. */
  publicationPatch: UpdatePublicationOnAnnotationForAnnotationPublicationIdFkeyPatch;
  accountId: Scalars['UUID'];
  title: Scalars['String'];
};

/** The fields on `publication` to look up the row to update. */
export type PublicationOnAnnotationForAnnotationPublicationIdFkeyUsingPublicationPkeyUpdate = {
  /** An object where the defined keys will be set on the `publication` being updated. */
  publicationPatch: UpdatePublicationOnAnnotationForAnnotationPublicationIdFkeyPatch;
  publicationId: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type PublicationOnBookForBookPublicationIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `book` to be connected. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `book` being updated. */
  bookPatch: BookPatch;
};

/** The fields on `publication` to look up the row to update. */
export type PublicationOnBookForBookPublicationIdFkeyUsingPublicationAccountIdTitleKeyUpdate = {
  /** An object where the defined keys will be set on the `publication` being updated. */
  publicationPatch: UpdatePublicationOnBookForBookPublicationIdFkeyPatch;
  accountId: Scalars['UUID'];
  title: Scalars['String'];
};

/** The fields on `publication` to look up the row to update. */
export type PublicationOnBookForBookPublicationIdFkeyUsingPublicationPkeyUpdate = {
  /** An object where the defined keys will be set on the `publication` being updated. */
  publicationPatch: UpdatePublicationOnBookForBookPublicationIdFkeyPatch;
  publicationId: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type PublicationOnPublicationAuthorForPublicationAuthorPublicationIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `publicationAuthor` to be connected. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `publicationAuthor` being updated. */
  publicationAuthorPatch: PublicationAuthorPatch;
};

/** The fields on `publication` to look up the row to update. */
export type PublicationOnPublicationAuthorForPublicationAuthorPublicationIdFkeyUsingPublicationAccountIdTitleKeyUpdate = {
  /** An object where the defined keys will be set on the `publication` being updated. */
  publicationPatch: UpdatePublicationOnPublicationAuthorForPublicationAuthorPublicationIdFkeyPatch;
  accountId: Scalars['UUID'];
  title: Scalars['String'];
};

/** The fields on `publication` to look up the row to update. */
export type PublicationOnPublicationAuthorForPublicationAuthorPublicationIdFkeyUsingPublicationPkeyUpdate = {
  /** An object where the defined keys will be set on the `publication` being updated. */
  publicationPatch: UpdatePublicationOnPublicationAuthorForPublicationAuthorPublicationIdFkeyPatch;
  publicationId: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type PublicationOnPublicationForPublicationAccountIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `account` to be connected. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `account` being updated. */
  accountPatch: AccountPatch;
};

/** The fields on `publication` to look up the row to update. */
export type PublicationOnPublicationForPublicationAccountIdFkeyUsingPublicationAccountIdTitleKeyUpdate = {
  /** An object where the defined keys will be set on the `publication` being updated. */
  publicationPatch: UpdatePublicationOnPublicationForPublicationAccountIdFkeyPatch;
  accountId: Scalars['UUID'];
  title: Scalars['String'];
};

/** The fields on `publication` to look up the row to update. */
export type PublicationOnPublicationForPublicationAccountIdFkeyUsingPublicationPkeyUpdate = {
  /** An object where the defined keys will be set on the `publication` being updated. */
  publicationPatch: UpdatePublicationOnPublicationForPublicationAccountIdFkeyPatch;
  publicationId: Scalars['String'];
};

/** Represents an update to a `Publication`. Fields that are set will be updated. */
export type PublicationPatch = {
  publicationId?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  title?: Maybe<Scalars['String']>;
  additionalMeta?: Maybe<Scalars['JSON']>;
  accountToAccountId?: Maybe<PublicationAccountIdFkeyInput>;
  bookUsingPublicationId?: Maybe<BookPublicationIdFkeyInverseInput>;
  annotationsUsingPublicationId?: Maybe<AnnotationPublicationIdFkeyInverseInput>;
  publicationAuthorsUsingPublicationId?: Maybe<PublicationAuthorPublicationIdFkeyInverseInput>;
};

/** The fields on `publication` to look up the row to connect. */
export type PublicationPublicationAccountIdTitleKeyConnect = {
  accountId: Scalars['UUID'];
  title: Scalars['String'];
};

/** The fields on `publication` to look up the row to delete. */
export type PublicationPublicationAccountIdTitleKeyDelete = {
  accountId: Scalars['UUID'];
  title: Scalars['String'];
};

/** The fields on `publication` to look up the row to connect. */
export type PublicationPublicationPkeyConnect = {
  publicationId: Scalars['String'];
};

/** The fields on `publication` to look up the row to delete. */
export type PublicationPublicationPkeyDelete = {
  publicationId: Scalars['String'];
};

/** A connection to a list of `Publication` values. */
export type PublicationsConnection = {
  /** A list of `Publication` objects. */
  nodes: Array<Maybe<Publication>>;
  /** A list of edges which contains the `Publication` and cursor to aid in pagination. */
  edges: Array<PublicationsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Publication` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Publication` edge in the connection. */
export type PublicationsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Publication` at the end of the edge. */
  node?: Maybe<Publication>;
};

/** Methods to use when ordering `Publication`. */
export enum PublicationsOrderBy {
  Natural = 'NATURAL',
  PublicationIdAsc = 'PUBLICATION_ID_ASC',
  PublicationIdDesc = 'PUBLICATION_ID_DESC',
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  /** Reads a single `Account` using its globally unique `ID`. */
  account?: Maybe<Account>;
  accountByAccountId?: Maybe<Account>;
  accountByEmail?: Maybe<Account>;
  /** Reads and enables pagination through a set of `AccountTagAnnotation`. */
  allAccountTagAnnotations?: Maybe<AccountTagAnnotationsConnection>;
  /** Reads and enables pagination through a set of `Account`. */
  allAccounts?: Maybe<AccountsConnection>;
  /** Reads and enables pagination through a set of `AnnotationTag`. */
  allAnnotationTags?: Maybe<AnnotationTagsConnection>;
  /** Reads and enables pagination through a set of `Annotation`. */
  allAnnotations?: Maybe<AnnotationsConnection>;
  /** Reads and enables pagination through a set of `Author`. */
  allAuthors?: Maybe<AuthorsConnection>;
  /** Reads and enables pagination through a set of `Book`. */
  allBooks?: Maybe<BooksConnection>;
  /** Reads and enables pagination through a set of `PublicationAuthor`. */
  allPublicationAuthors?: Maybe<PublicationAuthorsConnection>;
  /** Reads and enables pagination through a set of `Publication`. */
  allPublications?: Maybe<PublicationsConnection>;
  /** Reads and enables pagination through a set of `Tag`. */
  allTags?: Maybe<TagsConnection>;
  /** Reads a single `Annotation` using its globally unique `ID`. */
  annotation?: Maybe<Annotation>;
  annotationByAnnotationId?: Maybe<Annotation>;
  annotationByPublicationIdAndAccountIdAndHighlightLocationAndHighlightText?: Maybe<Annotation>;
  annotationByPublicationIdAndAccountIdAndNoteLocationAndNoteText?: Maybe<Annotation>;
  /** Reads a single `AnnotationTag` using its globally unique `ID`. */
  annotationTag?: Maybe<AnnotationTag>;
  annotationTagByAnnotationIdAndTagId?: Maybe<AnnotationTag>;
  /** Reads a single `Author` using its globally unique `ID`. */
  author?: Maybe<Author>;
  authorByAccountIdAndFullName?: Maybe<Author>;
  authorByAuthorId?: Maybe<Author>;
  authorByFullName?: Maybe<Author>;
  /** Reads a single `Book` using its globally unique `ID`. */
  book?: Maybe<Book>;
  bookByPublicationId?: Maybe<Book>;
  currentAccount?: Maybe<CurrentAccount>;
  currentAccountId?: Maybe<Scalars['UUID']>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  id: Scalars['ID'];
  isValidMongoId?: Maybe<Scalars['Boolean']>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** Reads a single `Publication` using its globally unique `ID`. */
  publication?: Maybe<Publication>;
  /** Reads a single `PublicationAuthor` using its globally unique `ID`. */
  publicationAuthor?: Maybe<PublicationAuthor>;
  publicationAuthorByPublicationIdAndAuthorId?: Maybe<PublicationAuthor>;
  publicationByAccountIdAndTitle?: Maybe<Publication>;
  publicationByPublicationId?: Maybe<Publication>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `Tag` using its globally unique `ID`. */
  tag?: Maybe<Tag>;
  tagByAccountIdAndTagName?: Maybe<Tag>;
  tagByTagId?: Maybe<Tag>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAccountArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAccountByAccountIdArgs = {
  accountId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAccountByEmailArgs = {
  email: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAllAccountTagAnnotationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AccountTagAnnotationsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllAccountsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AccountsOrderBy>>;
  condition?: Maybe<AccountCondition>;
  filter?: Maybe<AccountFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllAnnotationTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AnnotationTagsOrderBy>>;
  condition?: Maybe<AnnotationTagCondition>;
  filter?: Maybe<AnnotationTagFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllAnnotationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AnnotationsOrderBy>>;
  condition?: Maybe<AnnotationCondition>;
  filter?: Maybe<AnnotationFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllAuthorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AuthorsOrderBy>>;
  condition?: Maybe<AuthorCondition>;
  filter?: Maybe<AuthorFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllBooksArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<BooksOrderBy>>;
  condition?: Maybe<BookCondition>;
  filter?: Maybe<BookFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPublicationAuthorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PublicationAuthorsOrderBy>>;
  condition?: Maybe<PublicationAuthorCondition>;
  filter?: Maybe<PublicationAuthorFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPublicationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PublicationsOrderBy>>;
  condition?: Maybe<PublicationCondition>;
  filter?: Maybe<PublicationFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<TagsOrderBy>>;
  condition?: Maybe<TagCondition>;
  filter?: Maybe<TagFilter>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAnnotationArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAnnotationByAnnotationIdArgs = {
  annotationId: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAnnotationByPublicationIdAndAccountIdAndHighlightLocationAndHighlightTextArgs = {
  publicationId: Scalars['String'];
  accountId: Scalars['UUID'];
  highlightLocation: Scalars['JSON'];
  highlightText: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAnnotationByPublicationIdAndAccountIdAndNoteLocationAndNoteTextArgs = {
  publicationId: Scalars['String'];
  accountId: Scalars['UUID'];
  noteLocation: Scalars['JSON'];
  noteText: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAnnotationTagArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAnnotationTagByAnnotationIdAndTagIdArgs = {
  annotationId: Scalars['String'];
  tagId: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAuthorArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAuthorByAccountIdAndFullNameArgs = {
  accountId: Scalars['UUID'];
  fullName: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAuthorByAuthorIdArgs = {
  authorId: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAuthorByFullNameArgs = {
  fullName: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBookArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBookByPublicationIdArgs = {
  publicationId: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryIsValidMongoIdArgs = {
  id?: Maybe<Scalars['String']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPublicationArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPublicationAuthorArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPublicationAuthorByPublicationIdAndAuthorIdArgs = {
  publicationId: Scalars['String'];
  authorId: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPublicationByAccountIdAndTitleArgs = {
  accountId: Scalars['UUID'];
  title: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPublicationByPublicationIdArgs = {
  publicationId: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTagArgs = {
  id: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTagByAccountIdAndTagNameArgs = {
  accountId: Scalars['UUID'];
  tagName: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTagByTagIdArgs = {
  tagId: Scalars['String'];
};

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['String']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['String']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['String']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['String']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['String']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['String']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Contains the specified string (case-sensitive). */
  includes?: Maybe<Scalars['String']>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: Maybe<Scalars['String']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: Maybe<Scalars['String']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: Maybe<Scalars['String']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: Maybe<Scalars['String']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: Maybe<Scalars['String']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: Maybe<Scalars['String']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: Maybe<Scalars['String']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: Maybe<Scalars['String']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: Maybe<Scalars['String']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: Maybe<Scalars['String']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: Maybe<Scalars['String']>;
  /**
   * Matches the specified pattern (case-sensitive). An underscore (_) matches any
   * single character; a percent sign (%) matches any sequence of zero or more characters.
   */
  like?: Maybe<Scalars['String']>;
  /**
   * Does not match the specified pattern (case-sensitive). An underscore (_)
   * matches any single character; a percent sign (%) matches any sequence of zero
   * or more characters.
   */
  notLike?: Maybe<Scalars['String']>;
  /**
   * Matches the specified pattern (case-insensitive). An underscore (_) matches
   * any single character; a percent sign (%) matches any sequence of zero or more characters.
   */
  likeInsensitive?: Maybe<Scalars['String']>;
  /**
   * Does not match the specified pattern (case-insensitive). An underscore (_)
   * matches any single character; a percent sign (%) matches any sequence of zero
   * or more characters.
   */
  notLikeInsensitive?: Maybe<Scalars['String']>;
  /** Matches the specified pattern using the SQL standard's definition of a regular expression. */
  similarTo?: Maybe<Scalars['String']>;
  /** Does not match the specified pattern using the SQL standard's definition of a regular expression. */
  notSimilarTo?: Maybe<Scalars['String']>;
};

export type Tag = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  id: Scalars['ID'];
  tagId: Scalars['String'];
  tagName: Scalars['String'];
  accountId: Scalars['UUID'];
  /** Reads a single `Account` that is related to this `Tag`. */
  accountByAccountId?: Maybe<Account>;
  /** Reads and enables pagination through a set of `AnnotationTag`. */
  annotationTagsByTagId: AnnotationTagsConnection;
  /** Reads and enables pagination through a set of `Annotation`. */
  annotationsByAnnotationTagTagIdAndAnnotationId: TagAnnotationsByAnnotationTagTagIdAndAnnotationIdManyToManyConnection;
};


export type TagAnnotationTagsByTagIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AnnotationTagsOrderBy>>;
  condition?: Maybe<AnnotationTagCondition>;
  filter?: Maybe<AnnotationTagFilter>;
};


export type TagAnnotationsByAnnotationTagTagIdAndAnnotationIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<AnnotationsOrderBy>>;
  condition?: Maybe<AnnotationCondition>;
  filter?: Maybe<AnnotationFilter>;
};

/** The `account` to be created by this mutation. */
export type TagAccountIdFkeyAccountCreateInput = {
  email: Scalars['String'];
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  status?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  group?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  publicationsUsingAccountId?: Maybe<PublicationAccountIdFkeyInverseInput>;
  annotationsUsingAccountId?: Maybe<AnnotationAccountIdFkeyInverseInput>;
  authorsUsingAccountId?: Maybe<AuthorAccountIdFkeyInverseInput>;
  tagsUsingAccountId?: Maybe<TagAccountIdFkeyInverseInput>;
};

/** Input for the nested mutation of `account` in the `TagInput` mutation. */
export type TagAccountIdFkeyInput = {
  /** The primary key(s) for `account` for the far side of the relationship. */
  connectByAccountId?: Maybe<AccountAccountPkeyConnect>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  connectByEmail?: Maybe<AccountAccountEmailKeyConnect>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  connectById?: Maybe<AccountNodeIdConnect>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  deleteByAccountId?: Maybe<AccountAccountPkeyDelete>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  deleteByEmail?: Maybe<AccountAccountEmailKeyDelete>;
  /** The primary key(s) for `account` for the far side of the relationship. */
  deleteById?: Maybe<AccountNodeIdDelete>;
  /** The primary key(s) and patch data for `account` for the far side of the relationship. */
  updateByAccountId?: Maybe<AccountOnTagForTagAccountIdFkeyUsingAccountPkeyUpdate>;
  /** The primary key(s) and patch data for `account` for the far side of the relationship. */
  updateByEmail?: Maybe<AccountOnTagForTagAccountIdFkeyUsingAccountEmailKeyUpdate>;
  /** The primary key(s) and patch data for `account` for the far side of the relationship. */
  updateById?: Maybe<TagOnTagForTagAccountIdFkeyNodeIdUpdate>;
  /** A `AccountInput` object that will be created and connected to this object. */
  create?: Maybe<TagAccountIdFkeyAccountCreateInput>;
};

/** Input for the nested mutation of `tag` in the `AccountInput` mutation. */
export type TagAccountIdFkeyInverseInput = {
  /** Flag indicating whether all other `tag` records that match this relationship should be removed. */
  deleteOthers?: Maybe<Scalars['Boolean']>;
  /** The primary key(s) for `tag` for the far side of the relationship. */
  connectByTagId?: Maybe<Array<TagTagPkeyConnect>>;
  /** The primary key(s) for `tag` for the far side of the relationship. */
  connectByAccountIdAndTagName?: Maybe<Array<TagNoDuplicateTagsPerAccountConnect>>;
  /** The primary key(s) for `tag` for the far side of the relationship. */
  connectById?: Maybe<Array<TagNodeIdConnect>>;
  /** The primary key(s) for `tag` for the far side of the relationship. */
  deleteByTagId?: Maybe<Array<TagTagPkeyDelete>>;
  /** The primary key(s) for `tag` for the far side of the relationship. */
  deleteByAccountIdAndTagName?: Maybe<Array<TagNoDuplicateTagsPerAccountDelete>>;
  /** The primary key(s) for `tag` for the far side of the relationship. */
  deleteById?: Maybe<Array<TagNodeIdDelete>>;
  /** The primary key(s) and patch data for `tag` for the far side of the relationship. */
  updateByTagId?: Maybe<Array<TagOnTagForTagAccountIdFkeyUsingTagPkeyUpdate>>;
  /** The primary key(s) and patch data for `tag` for the far side of the relationship. */
  updateByAccountIdAndTagName?: Maybe<Array<TagOnTagForTagAccountIdFkeyUsingNoDuplicateTagsPerAccountUpdate>>;
  /** The primary key(s) and patch data for `tag` for the far side of the relationship. */
  updateById?: Maybe<Array<AccountOnTagForTagAccountIdFkeyNodeIdUpdate>>;
  /** A `TagInput` object that will be created and connected to this object. */
  create?: Maybe<Array<TagAccountIdFkeyTagCreateInput>>;
};

/** The `tag` to be created by this mutation. */
export type TagAccountIdFkeyTagCreateInput = {
  tagId: Scalars['String'];
  tagName: Scalars['String'];
  accountToAccountId?: Maybe<TagAccountIdFkeyInput>;
  annotationTagsUsingTagId?: Maybe<AnnotationTagTagIdFkeyInverseInput>;
};

/** A connection to a list of `Annotation` values, with data from `AnnotationTag`. */
export type TagAnnotationsByAnnotationTagTagIdAndAnnotationIdManyToManyConnection = {
  /** A list of `Annotation` objects. */
  nodes: Array<Maybe<Annotation>>;
  /** A list of edges which contains the `Annotation`, info from the `AnnotationTag`, and the cursor to aid in pagination. */
  edges: Array<TagAnnotationsByAnnotationTagTagIdAndAnnotationIdManyToManyEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Annotation` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Annotation` edge in the connection, with data from `AnnotationTag`. */
export type TagAnnotationsByAnnotationTagTagIdAndAnnotationIdManyToManyEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Annotation` at the end of the edge. */
  node?: Maybe<Annotation>;
};

/** A condition to be used against `Tag` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type TagCondition = {
  /** Checks for equality with the object’s `tagId` field. */
  tagId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `tagName` field. */
  tagName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `accountId` field. */
  accountId?: Maybe<Scalars['UUID']>;
};

/** A filter to be used against `Tag` object types. All fields are combined with a logical ‘and.’ */
export type TagFilter = {
  /** Filter by the object’s `tagId` field. */
  tagId?: Maybe<StringFilter>;
  /** Filter by the object’s `tagName` field. */
  tagName?: Maybe<StringFilter>;
  /** Filter by the object’s `accountId` field. */
  accountId?: Maybe<UuidFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<TagFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<TagFilter>>;
  /** Negates the expression. */
  not?: Maybe<TagFilter>;
};

/** An input for mutations affecting `Tag` */
export type TagInput = {
  tagId: Scalars['String'];
  tagName: Scalars['String'];
  accountId?: Maybe<Scalars['UUID']>;
  accountToAccountId?: Maybe<TagAccountIdFkeyInput>;
  annotationTagsUsingTagId?: Maybe<AnnotationTagTagIdFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type TagNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `tag` to be connected. */
  id: Scalars['ID'];
};

/** The globally unique `ID` look up for the row to delete. */
export type TagNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `tag` to be deleted. */
  id: Scalars['ID'];
};

/** The fields on `tag` to look up the row to connect. */
export type TagNoDuplicateTagsPerAccountConnect = {
  accountId: Scalars['UUID'];
  tagName: Scalars['String'];
};

/** The fields on `tag` to look up the row to delete. */
export type TagNoDuplicateTagsPerAccountDelete = {
  accountId: Scalars['UUID'];
  tagName: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type TagOnAnnotationTagForAnnotationTagTagIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `annotationTag` to be connected. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `annotationTag` being updated. */
  annotationTagPatch: AnnotationTagPatch;
};

/** The fields on `tag` to look up the row to update. */
export type TagOnAnnotationTagForAnnotationTagTagIdFkeyUsingNoDuplicateTagsPerAccountUpdate = {
  /** An object where the defined keys will be set on the `tag` being updated. */
  tagPatch: UpdateTagOnAnnotationTagForAnnotationTagTagIdFkeyPatch;
  accountId: Scalars['UUID'];
  tagName: Scalars['String'];
};

/** The fields on `tag` to look up the row to update. */
export type TagOnAnnotationTagForAnnotationTagTagIdFkeyUsingTagPkeyUpdate = {
  /** An object where the defined keys will be set on the `tag` being updated. */
  tagPatch: UpdateTagOnAnnotationTagForAnnotationTagTagIdFkeyPatch;
  tagId: Scalars['String'];
};

/** The globally unique `ID` look up for the row to update. */
export type TagOnTagForTagAccountIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `account` to be connected. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `account` being updated. */
  accountPatch: AccountPatch;
};

/** The fields on `tag` to look up the row to update. */
export type TagOnTagForTagAccountIdFkeyUsingNoDuplicateTagsPerAccountUpdate = {
  /** An object where the defined keys will be set on the `tag` being updated. */
  tagPatch: UpdateTagOnTagForTagAccountIdFkeyPatch;
  accountId: Scalars['UUID'];
  tagName: Scalars['String'];
};

/** The fields on `tag` to look up the row to update. */
export type TagOnTagForTagAccountIdFkeyUsingTagPkeyUpdate = {
  /** An object where the defined keys will be set on the `tag` being updated. */
  tagPatch: UpdateTagOnTagForTagAccountIdFkeyPatch;
  tagId: Scalars['String'];
};

/** Represents an update to a `Tag`. Fields that are set will be updated. */
export type TagPatch = {
  tagId?: Maybe<Scalars['String']>;
  tagName?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['UUID']>;
  accountToAccountId?: Maybe<TagAccountIdFkeyInput>;
  annotationTagsUsingTagId?: Maybe<AnnotationTagTagIdFkeyInverseInput>;
};

/** A connection to a list of `Tag` values. */
export type TagsConnection = {
  /** A list of `Tag` objects. */
  nodes: Array<Maybe<Tag>>;
  /** A list of edges which contains the `Tag` and cursor to aid in pagination. */
  edges: Array<TagsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Tag` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Tag` edge in the connection. */
export type TagsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Tag` at the end of the edge. */
  node?: Maybe<Tag>;
};

/** Methods to use when ordering `Tag`. */
export enum TagsOrderBy {
  Natural = 'NATURAL',
  TagIdAsc = 'TAG_ID_ASC',
  TagIdDesc = 'TAG_ID_DESC',
  TagNameAsc = 'TAG_NAME_ASC',
  TagNameDesc = 'TAG_NAME_DESC',
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The fields on `tag` to look up the row to connect. */
export type TagTagPkeyConnect = {
  tagId: Scalars['String'];
};

/** The fields on `tag` to look up the row to delete. */
export type TagTagPkeyDelete = {
  tagId: Scalars['String'];
};

/** All input for the `updateAccountByAccountId` mutation. */
export type UpdateAccountByAccountIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Account` being updated. */
  accountPatch: AccountPatch;
  accountId: Scalars['UUID'];
};

/** All input for the `updateAccountByEmail` mutation. */
export type UpdateAccountByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Account` being updated. */
  accountPatch: AccountPatch;
  email: Scalars['String'];
};

/** All input for the `updateAccount` mutation. */
export type UpdateAccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Account` to be updated. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `Account` being updated. */
  accountPatch: AccountPatch;
};

/** An object where the defined keys will be set on the `account` being updated. */
export type UpdateAccountOnAnnotationForAnnotationAccountIdFkeyPatch = {
  email?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  status?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  group?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  publicationsUsingAccountId?: Maybe<PublicationAccountIdFkeyInverseInput>;
  annotationsUsingAccountId?: Maybe<AnnotationAccountIdFkeyInverseInput>;
  authorsUsingAccountId?: Maybe<AuthorAccountIdFkeyInverseInput>;
  tagsUsingAccountId?: Maybe<TagAccountIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `account` being updated. */
export type UpdateAccountOnAuthorForAuthorAccountIdFkeyPatch = {
  email?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  status?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  group?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  publicationsUsingAccountId?: Maybe<PublicationAccountIdFkeyInverseInput>;
  annotationsUsingAccountId?: Maybe<AnnotationAccountIdFkeyInverseInput>;
  authorsUsingAccountId?: Maybe<AuthorAccountIdFkeyInverseInput>;
  tagsUsingAccountId?: Maybe<TagAccountIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `account` being updated. */
export type UpdateAccountOnPublicationForPublicationAccountIdFkeyPatch = {
  email?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  status?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  group?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  publicationsUsingAccountId?: Maybe<PublicationAccountIdFkeyInverseInput>;
  annotationsUsingAccountId?: Maybe<AnnotationAccountIdFkeyInverseInput>;
  authorsUsingAccountId?: Maybe<AuthorAccountIdFkeyInverseInput>;
  tagsUsingAccountId?: Maybe<TagAccountIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `account` being updated. */
export type UpdateAccountOnTagForTagAccountIdFkeyPatch = {
  email?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  status?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  group?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  publicationsUsingAccountId?: Maybe<PublicationAccountIdFkeyInverseInput>;
  annotationsUsingAccountId?: Maybe<AnnotationAccountIdFkeyInverseInput>;
  authorsUsingAccountId?: Maybe<AuthorAccountIdFkeyInverseInput>;
  tagsUsingAccountId?: Maybe<TagAccountIdFkeyInverseInput>;
};

/** The output of our update `Account` mutation. */
export type UpdateAccountPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Account` that was updated by this mutation. */
  account?: Maybe<Account>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Account`. May be used by Relay 1. */
  accountEdge?: Maybe<AccountsEdge>;
};


/** The output of our update `Account` mutation. */
export type UpdateAccountPayloadAccountEdgeArgs = {
  orderBy?: Maybe<Array<AccountsOrderBy>>;
};

/** All input for the `updateAnnotationByAnnotationId` mutation. */
export type UpdateAnnotationByAnnotationIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Annotation` being updated. */
  annotationPatch: AnnotationPatch;
  annotationId: Scalars['String'];
};

/** All input for the `updateAnnotationByPublicationIdAndAccountIdAndHighlightLocationAndHighlightText` mutation. */
export type UpdateAnnotationByPublicationIdAndAccountIdAndHighlightLocationAndHighlightTextInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Annotation` being updated. */
  annotationPatch: AnnotationPatch;
  publicationId: Scalars['String'];
  accountId: Scalars['UUID'];
  highlightLocation: Scalars['JSON'];
  highlightText: Scalars['String'];
};

/** All input for the `updateAnnotationByPublicationIdAndAccountIdAndNoteLocationAndNoteText` mutation. */
export type UpdateAnnotationByPublicationIdAndAccountIdAndNoteLocationAndNoteTextInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Annotation` being updated. */
  annotationPatch: AnnotationPatch;
  publicationId: Scalars['String'];
  accountId: Scalars['UUID'];
  noteLocation: Scalars['JSON'];
  noteText: Scalars['String'];
};

/** All input for the `updateAnnotation` mutation. */
export type UpdateAnnotationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Annotation` to be updated. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `Annotation` being updated. */
  annotationPatch: AnnotationPatch;
};

/** An object where the defined keys will be set on the `annotation` being updated. */
export type UpdateAnnotationOnAnnotationForAnnotationAccountIdFkeyPatch = {
  annotationId?: Maybe<Scalars['String']>;
  publicationId?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  highlightLocation?: Maybe<Scalars['JSON']>;
  highlightText?: Maybe<Scalars['String']>;
  noteText?: Maybe<Scalars['String']>;
  noteLocation?: Maybe<Scalars['JSON']>;
  recordedAt?: Maybe<Scalars['Datetime']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  editedHighlightText?: Maybe<Scalars['String']>;
  extraEdits?: Maybe<Scalars['JSON']>;
  tsv?: Maybe<Scalars['FullText']>;
  publicationToPublicationId?: Maybe<AnnotationPublicationIdFkeyInput>;
  accountToAccountId?: Maybe<AnnotationAccountIdFkeyInput>;
  annotationTagsUsingAnnotationId?: Maybe<AnnotationTagAnnotationIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `annotation` being updated. */
export type UpdateAnnotationOnAnnotationForAnnotationPublicationIdFkeyPatch = {
  annotationId?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['UUID']>;
  color?: Maybe<Scalars['String']>;
  highlightLocation?: Maybe<Scalars['JSON']>;
  highlightText?: Maybe<Scalars['String']>;
  noteText?: Maybe<Scalars['String']>;
  noteLocation?: Maybe<Scalars['JSON']>;
  recordedAt?: Maybe<Scalars['Datetime']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  editedHighlightText?: Maybe<Scalars['String']>;
  extraEdits?: Maybe<Scalars['JSON']>;
  tsv?: Maybe<Scalars['FullText']>;
  publicationToPublicationId?: Maybe<AnnotationPublicationIdFkeyInput>;
  accountToAccountId?: Maybe<AnnotationAccountIdFkeyInput>;
  annotationTagsUsingAnnotationId?: Maybe<AnnotationTagAnnotationIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `annotation` being updated. */
export type UpdateAnnotationOnAnnotationTagForAnnotationTagAnnotationIdFkeyPatch = {
  publicationId?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['UUID']>;
  color?: Maybe<Scalars['String']>;
  highlightLocation?: Maybe<Scalars['JSON']>;
  highlightText?: Maybe<Scalars['String']>;
  noteText?: Maybe<Scalars['String']>;
  noteLocation?: Maybe<Scalars['JSON']>;
  recordedAt?: Maybe<Scalars['Datetime']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  editedHighlightText?: Maybe<Scalars['String']>;
  extraEdits?: Maybe<Scalars['JSON']>;
  tsv?: Maybe<Scalars['FullText']>;
  publicationToPublicationId?: Maybe<AnnotationPublicationIdFkeyInput>;
  accountToAccountId?: Maybe<AnnotationAccountIdFkeyInput>;
  annotationTagsUsingAnnotationId?: Maybe<AnnotationTagAnnotationIdFkeyInverseInput>;
};

/** The output of our update `Annotation` mutation. */
export type UpdateAnnotationPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Annotation` that was updated by this mutation. */
  annotation?: Maybe<Annotation>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Publication` that is related to this `Annotation`. */
  publicationByPublicationId?: Maybe<Publication>;
  /** Reads a single `Account` that is related to this `Annotation`. */
  accountByAccountId?: Maybe<Account>;
  /** An edge for our `Annotation`. May be used by Relay 1. */
  annotationEdge?: Maybe<AnnotationsEdge>;
};


/** The output of our update `Annotation` mutation. */
export type UpdateAnnotationPayloadAnnotationEdgeArgs = {
  orderBy?: Maybe<Array<AnnotationsOrderBy>>;
};

/** All input for the `updateAnnotationTagByAnnotationIdAndTagId` mutation. */
export type UpdateAnnotationTagByAnnotationIdAndTagIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `AnnotationTag` being updated. */
  annotationTagPatch: AnnotationTagPatch;
  annotationId: Scalars['String'];
  tagId: Scalars['String'];
};

/** All input for the `updateAnnotationTag` mutation. */
export type UpdateAnnotationTagInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `AnnotationTag` to be updated. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `AnnotationTag` being updated. */
  annotationTagPatch: AnnotationTagPatch;
};

/** An object where the defined keys will be set on the `annotationTag` being updated. */
export type UpdateAnnotationTagOnAnnotationTagForAnnotationTagAnnotationIdFkeyPatch = {
  tagId?: Maybe<Scalars['String']>;
  annotationToAnnotationId?: Maybe<AnnotationTagAnnotationIdFkeyInput>;
  tagToTagId?: Maybe<AnnotationTagTagIdFkeyInput>;
};

/** An object where the defined keys will be set on the `annotationTag` being updated. */
export type UpdateAnnotationTagOnAnnotationTagForAnnotationTagTagIdFkeyPatch = {
  annotationId?: Maybe<Scalars['String']>;
  annotationToAnnotationId?: Maybe<AnnotationTagAnnotationIdFkeyInput>;
  tagToTagId?: Maybe<AnnotationTagTagIdFkeyInput>;
};

/** The output of our update `AnnotationTag` mutation. */
export type UpdateAnnotationTagPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `AnnotationTag` that was updated by this mutation. */
  annotationTag?: Maybe<AnnotationTag>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Annotation` that is related to this `AnnotationTag`. */
  annotationByAnnotationId?: Maybe<Annotation>;
  /** Reads a single `Tag` that is related to this `AnnotationTag`. */
  tagByTagId?: Maybe<Tag>;
  /** An edge for our `AnnotationTag`. May be used by Relay 1. */
  annotationTagEdge?: Maybe<AnnotationTagsEdge>;
};


/** The output of our update `AnnotationTag` mutation. */
export type UpdateAnnotationTagPayloadAnnotationTagEdgeArgs = {
  orderBy?: Maybe<Array<AnnotationTagsOrderBy>>;
};

/** All input for the `updateAuthorByAccountIdAndFullName` mutation. */
export type UpdateAuthorByAccountIdAndFullNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Author` being updated. */
  authorPatch: AuthorPatch;
  accountId: Scalars['UUID'];
  fullName: Scalars['String'];
};

/** All input for the `updateAuthorByAuthorId` mutation. */
export type UpdateAuthorByAuthorIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Author` being updated. */
  authorPatch: AuthorPatch;
  authorId: Scalars['String'];
};

/** All input for the `updateAuthorByFullName` mutation. */
export type UpdateAuthorByFullNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Author` being updated. */
  authorPatch: AuthorPatch;
  fullName: Scalars['String'];
};

/** All input for the `updateAuthor` mutation. */
export type UpdateAuthorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Author` to be updated. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `Author` being updated. */
  authorPatch: AuthorPatch;
};

/** An object where the defined keys will be set on the `author` being updated. */
export type UpdateAuthorOnAuthorForAuthorAccountIdFkeyPatch = {
  authorId?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  accountToAccountId?: Maybe<AuthorAccountIdFkeyInput>;
  publicationAuthorsUsingAuthorId?: Maybe<PublicationAuthorAuthorIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `author` being updated. */
export type UpdateAuthorOnPublicationAuthorForPublicationAuthorAuthorIdFkeyPatch = {
  fullName?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['UUID']>;
  accountToAccountId?: Maybe<AuthorAccountIdFkeyInput>;
  publicationAuthorsUsingAuthorId?: Maybe<PublicationAuthorAuthorIdFkeyInverseInput>;
};

/** The output of our update `Author` mutation. */
export type UpdateAuthorPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Author` that was updated by this mutation. */
  author?: Maybe<Author>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Account` that is related to this `Author`. */
  accountByAccountId?: Maybe<Account>;
  /** An edge for our `Author`. May be used by Relay 1. */
  authorEdge?: Maybe<AuthorsEdge>;
};


/** The output of our update `Author` mutation. */
export type UpdateAuthorPayloadAuthorEdgeArgs = {
  orderBy?: Maybe<Array<AuthorsOrderBy>>;
};

/** All input for the `updateBookByPublicationId` mutation. */
export type UpdateBookByPublicationIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Book` being updated. */
  bookPatch: BookPatch;
  publicationId: Scalars['String'];
};

/** All input for the `updateBook` mutation. */
export type UpdateBookInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Book` to be updated. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `Book` being updated. */
  bookPatch: BookPatch;
};

/** An object where the defined keys will be set on the `book` being updated. */
export type UpdateBookOnBookForBookPublicationIdFkeyPatch = {
  isbn13?: Maybe<Scalars['String']>;
  bookTitle?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  publicationDate?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  bookType?: Maybe<Scalars['String']>;
  publicationToPublicationId?: Maybe<BookPublicationIdFkeyInput>;
};

/** The output of our update `Book` mutation. */
export type UpdateBookPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Book` that was updated by this mutation. */
  book?: Maybe<Book>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Publication` that is related to this `Book`. */
  publicationByPublicationId?: Maybe<Publication>;
  /** An edge for our `Book`. May be used by Relay 1. */
  bookEdge?: Maybe<BooksEdge>;
};


/** The output of our update `Book` mutation. */
export type UpdateBookPayloadBookEdgeArgs = {
  orderBy?: Maybe<Array<BooksOrderBy>>;
};

/** All input for the `updatePublicationAuthorByPublicationIdAndAuthorId` mutation. */
export type UpdatePublicationAuthorByPublicationIdAndAuthorIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `PublicationAuthor` being updated. */
  publicationAuthorPatch: PublicationAuthorPatch;
  publicationId: Scalars['String'];
  authorId: Scalars['String'];
};

/** All input for the `updatePublicationAuthor` mutation. */
export type UpdatePublicationAuthorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `PublicationAuthor` to be updated. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `PublicationAuthor` being updated. */
  publicationAuthorPatch: PublicationAuthorPatch;
};

/** An object where the defined keys will be set on the `publicationAuthor` being updated. */
export type UpdatePublicationAuthorOnPublicationAuthorForPublicationAuthorAuthorIdFkeyPatch = {
  publicationId?: Maybe<Scalars['String']>;
  publicationToPublicationId?: Maybe<PublicationAuthorPublicationIdFkeyInput>;
  authorToAuthorId?: Maybe<PublicationAuthorAuthorIdFkeyInput>;
};

/** An object where the defined keys will be set on the `publicationAuthor` being updated. */
export type UpdatePublicationAuthorOnPublicationAuthorForPublicationAuthorPublicationIdFkeyPatch = {
  authorId?: Maybe<Scalars['String']>;
  publicationToPublicationId?: Maybe<PublicationAuthorPublicationIdFkeyInput>;
  authorToAuthorId?: Maybe<PublicationAuthorAuthorIdFkeyInput>;
};

/** The output of our update `PublicationAuthor` mutation. */
export type UpdatePublicationAuthorPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PublicationAuthor` that was updated by this mutation. */
  publicationAuthor?: Maybe<PublicationAuthor>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Publication` that is related to this `PublicationAuthor`. */
  publicationByPublicationId?: Maybe<Publication>;
  /** Reads a single `Author` that is related to this `PublicationAuthor`. */
  authorByAuthorId?: Maybe<Author>;
  /** An edge for our `PublicationAuthor`. May be used by Relay 1. */
  publicationAuthorEdge?: Maybe<PublicationAuthorsEdge>;
};


/** The output of our update `PublicationAuthor` mutation. */
export type UpdatePublicationAuthorPayloadPublicationAuthorEdgeArgs = {
  orderBy?: Maybe<Array<PublicationAuthorsOrderBy>>;
};

/** All input for the `updatePublicationByAccountIdAndTitle` mutation. */
export type UpdatePublicationByAccountIdAndTitleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Publication` being updated. */
  publicationPatch: PublicationPatch;
  accountId: Scalars['UUID'];
  title: Scalars['String'];
};

/** All input for the `updatePublicationByPublicationId` mutation. */
export type UpdatePublicationByPublicationIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Publication` being updated. */
  publicationPatch: PublicationPatch;
  publicationId: Scalars['String'];
};

/** All input for the `updatePublication` mutation. */
export type UpdatePublicationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Publication` to be updated. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `Publication` being updated. */
  publicationPatch: PublicationPatch;
};

/** An object where the defined keys will be set on the `publication` being updated. */
export type UpdatePublicationOnAnnotationForAnnotationPublicationIdFkeyPatch = {
  accountId?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  title?: Maybe<Scalars['String']>;
  additionalMeta?: Maybe<Scalars['JSON']>;
  accountToAccountId?: Maybe<PublicationAccountIdFkeyInput>;
  bookUsingPublicationId?: Maybe<BookPublicationIdFkeyInverseInput>;
  annotationsUsingPublicationId?: Maybe<AnnotationPublicationIdFkeyInverseInput>;
  publicationAuthorsUsingPublicationId?: Maybe<PublicationAuthorPublicationIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `publication` being updated. */
export type UpdatePublicationOnBookForBookPublicationIdFkeyPatch = {
  accountId?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  title?: Maybe<Scalars['String']>;
  additionalMeta?: Maybe<Scalars['JSON']>;
  accountToAccountId?: Maybe<PublicationAccountIdFkeyInput>;
  bookUsingPublicationId?: Maybe<BookPublicationIdFkeyInverseInput>;
  annotationsUsingPublicationId?: Maybe<AnnotationPublicationIdFkeyInverseInput>;
  publicationAuthorsUsingPublicationId?: Maybe<PublicationAuthorPublicationIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `publication` being updated. */
export type UpdatePublicationOnPublicationAuthorForPublicationAuthorPublicationIdFkeyPatch = {
  accountId?: Maybe<Scalars['UUID']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  title?: Maybe<Scalars['String']>;
  additionalMeta?: Maybe<Scalars['JSON']>;
  accountToAccountId?: Maybe<PublicationAccountIdFkeyInput>;
  bookUsingPublicationId?: Maybe<BookPublicationIdFkeyInverseInput>;
  annotationsUsingPublicationId?: Maybe<AnnotationPublicationIdFkeyInverseInput>;
  publicationAuthorsUsingPublicationId?: Maybe<PublicationAuthorPublicationIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `publication` being updated. */
export type UpdatePublicationOnPublicationForPublicationAccountIdFkeyPatch = {
  publicationId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  updatedAt?: Maybe<Scalars['Datetime']>;
  title?: Maybe<Scalars['String']>;
  additionalMeta?: Maybe<Scalars['JSON']>;
  accountToAccountId?: Maybe<PublicationAccountIdFkeyInput>;
  bookUsingPublicationId?: Maybe<BookPublicationIdFkeyInverseInput>;
  annotationsUsingPublicationId?: Maybe<AnnotationPublicationIdFkeyInverseInput>;
  publicationAuthorsUsingPublicationId?: Maybe<PublicationAuthorPublicationIdFkeyInverseInput>;
};

/** The output of our update `Publication` mutation. */
export type UpdatePublicationPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Publication` that was updated by this mutation. */
  publication?: Maybe<Publication>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Account` that is related to this `Publication`. */
  accountByAccountId?: Maybe<Account>;
  /** An edge for our `Publication`. May be used by Relay 1. */
  publicationEdge?: Maybe<PublicationsEdge>;
};


/** The output of our update `Publication` mutation. */
export type UpdatePublicationPayloadPublicationEdgeArgs = {
  orderBy?: Maybe<Array<PublicationsOrderBy>>;
};

/** All input for the `updateTagByAccountIdAndTagName` mutation. */
export type UpdateTagByAccountIdAndTagNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Tag` being updated. */
  tagPatch: TagPatch;
  accountId: Scalars['UUID'];
  tagName: Scalars['String'];
};

/** All input for the `updateTagByTagId` mutation. */
export type UpdateTagByTagIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Tag` being updated. */
  tagPatch: TagPatch;
  tagId: Scalars['String'];
};

/** All input for the `updateTag` mutation. */
export type UpdateTagInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Tag` to be updated. */
  id: Scalars['ID'];
  /** An object where the defined keys will be set on the `Tag` being updated. */
  tagPatch: TagPatch;
};

/** An object where the defined keys will be set on the `tag` being updated. */
export type UpdateTagOnAnnotationTagForAnnotationTagTagIdFkeyPatch = {
  tagName?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['UUID']>;
  accountToAccountId?: Maybe<TagAccountIdFkeyInput>;
  annotationTagsUsingTagId?: Maybe<AnnotationTagTagIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `tag` being updated. */
export type UpdateTagOnTagForTagAccountIdFkeyPatch = {
  tagId?: Maybe<Scalars['String']>;
  tagName?: Maybe<Scalars['String']>;
  accountToAccountId?: Maybe<TagAccountIdFkeyInput>;
  annotationTagsUsingTagId?: Maybe<AnnotationTagTagIdFkeyInverseInput>;
};

/** The output of our update `Tag` mutation. */
export type UpdateTagPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Tag` that was updated by this mutation. */
  tag?: Maybe<Tag>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Account` that is related to this `Tag`. */
  accountByAccountId?: Maybe<Account>;
  /** An edge for our `Tag`. May be used by Relay 1. */
  tagEdge?: Maybe<TagsEdge>;
};


/** The output of our update `Tag` mutation. */
export type UpdateTagPayloadTagEdgeArgs = {
  orderBy?: Maybe<Array<TagsOrderBy>>;
};


/** A filter to be used against UUID fields. All fields are combined with a logical ‘and.’ */
export type UuidFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['UUID']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['UUID']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['UUID']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['UUID']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['UUID']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['UUID']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['UUID']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['UUID']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['UUID']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['UUID']>;
};

export type UpdateAnnotationMutationVariables = Exact<{
  inputAnnotation: UpdateAnnotationInput;
}>;


export type UpdateAnnotationMutation = (
  { __typename: 'Mutation' }
  & { updateAnnotation?: Maybe<{ annotation?: Maybe<AnnotationAllFragment> }> }
);

export type DeleteAnnotationMutationVariables = Exact<{
  annotationId: Scalars['String'];
}>;


export type DeleteAnnotationMutation = (
  { __typename: 'Mutation' }
  & { deleteAnnotationByAnnotationId?: Maybe<(
    Pick<DeleteAnnotationPayload, 'deletedAnnotationId'>
    & { annotation?: Maybe<AnnotationAllFragment> }
  )> }
);

export type AnnotationAndPublicationFragment = (
  { publicationByPublicationId?: Maybe<PublicationAuthorAnnotationCountFragment> }
  & AnnotationAllFragment
);

export type GetAnnotationAndPublicationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAnnotationAndPublicationQuery = (
  { __typename: 'Query' }
  & { annotation?: Maybe<AnnotationAndPublicationFragment> }
);

export type GetAnnotationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAnnotationQuery = { annotation?: Maybe<AnnotationAllFragment> };

export type AddTagToAnnotationMutationVariables = Exact<{
  annotationId: Scalars['String'];
  tagId: Scalars['String'];
}>;


export type AddTagToAnnotationMutation = { createAnnotationTag?: Maybe<{ annotationByAnnotationId?: Maybe<AnnotationAllFragment> }> };

export type CreateTagAndAddToAnnotationMutationVariables = Exact<{
  tagId: Scalars['String'];
  tagName: Scalars['String'];
  annotationId: Scalars['String'];
  accountId: Scalars['UUID'];
}>;


export type CreateTagAndAddToAnnotationMutation = (
  { __typename: 'Mutation' }
  & { createTag?: Maybe<{ tag?: Maybe<TagAndCountFragment>, query?: Maybe<{ annotationByAnnotationId?: Maybe<AnnotationAllFragment> }> }> }
);

export type DeleteAnnotationTagMutationVariables = Exact<{
  annotationId: Scalars['String'];
  tagId: Scalars['String'];
}>;


export type DeleteAnnotationTagMutation = (
  { __typename: 'Mutation' }
  & { deleteAnnotationTagByAnnotationIdAndTagId?: Maybe<{ tagByTagId?: Maybe<TagAndCountFragment>, annotationByAnnotationId?: Maybe<AnnotationAllFragment> }> }
);

export type CreateAnnotationMutationVariables = Exact<{
  inputAnnotation: CreateAnnotationInput;
}>;


export type CreateAnnotationMutation = (
  { __typename: 'Mutation' }
  & { createAnnotation?: Maybe<{ annotationEdge?: Maybe<(
      Pick<AnnotationsEdge, 'cursor'>
      & { node?: Maybe<AnnotationAllFragment> }
    )> }> }
);

export type GetPublicationByPublicationIdQueryVariables = Exact<{
  publicationId: Scalars['String'];
}>;


export type GetPublicationByPublicationIdQuery = { publicationByPublicationId?: Maybe<PublicationAuthorAnnotationCountFragment> };

export type AddAuthorToPublicationMutationVariables = Exact<{
  authorId: Scalars['String'];
  publicationId: Scalars['String'];
}>;


export type AddAuthorToPublicationMutation = (
  { __typename: 'Mutation' }
  & { createPublicationAuthor?: Maybe<{ publicationByPublicationId?: Maybe<PublicationAuthorAnnotationCountFragment>, authorByAuthorId?: Maybe<AuthorAndPublicationCountFragment> }> }
);

export type CreateAuthorAndAddToPublicationMutationVariables = Exact<{
  authorId: Scalars['String'];
  fullName: Scalars['String'];
  accountId: Scalars['UUID'];
  publicationId: Scalars['String'];
}>;


export type CreateAuthorAndAddToPublicationMutation = (
  { __typename: 'Mutation' }
  & { createAuthor?: Maybe<{ author?: Maybe<AuthorAndPublicationCountFragment>, query?: Maybe<{ publicationByPublicationId?: Maybe<PublicationAuthorAnnotationCountFragment> }> }> }
);

export type DeletePublicationAuthorMutationVariables = Exact<{
  publicationId: Scalars['String'];
  authorId: Scalars['String'];
}>;


export type DeletePublicationAuthorMutation = (
  { __typename: 'Mutation' }
  & { deletePublicationAuthorByPublicationIdAndAuthorId?: Maybe<{ publicationByPublicationId?: Maybe<PublicationAuthorAnnotationCountFragment>, authorByAuthorId?: Maybe<AuthorAndPublicationCountFragment> }> }
);

export type UpdatePublicationMutationVariables = Exact<{
  inputPublication: UpdatePublicationByPublicationIdInput;
}>;


export type UpdatePublicationMutation = (
  { __typename: 'Mutation' }
  & { updatePublicationByPublicationId?: Maybe<{ publication?: Maybe<PublicationAuthorAnnotationCountFragment> }> }
);

export type AuthorAndPublicationCountFragment = (
  Pick<Author, 'id' | 'authorId' | 'fullName'>
  & { publicationAuthorsByAuthorId: Pick<PublicationAuthorsConnection, 'totalCount'> }
);

export type GetAllAuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAuthorsQuery = { allAuthors?: Maybe<{ nodes: Array<Maybe<AuthorAndPublicationCountFragment>> }> };

export type AuthorAndChildPublicationsFragment = (
  Pick<Author, 'id' | 'authorId' | 'fullName'>
  & { publicationAuthorsByAuthorId: (
    Pick<PublicationAuthorsConnection, 'totalCount'>
    & { nodes: Array<Maybe<{ publicationByPublicationId?: Maybe<Pick<Publication, 'id' | 'title' | 'publicationId'>> }>> }
  ) }
);

export type DeletedAuthorAndUpdatedPublicationsFragment = (
  Pick<Author, 'id' | 'authorId' | 'fullName'>
  & { publicationAuthorsByAuthorId: { nodes: Array<Maybe<{ publicationByPublicationId?: Maybe<PublicationAuthorAnnotationCountFragment> }>> } }
);

export type GetAllAuthorsAndChildPublicationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAuthorsAndChildPublicationsQuery = { allAuthors?: Maybe<{ nodes: Array<Maybe<AuthorAndChildPublicationsFragment>> }> };

export type GetAuthorAndChildPublicationsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAuthorAndChildPublicationsQuery = { author?: Maybe<AuthorAndChildPublicationsFragment> };

export type UpdateAuthorByAuthorIdMutationVariables = Exact<{
  authorId: Scalars['String'];
  authorPatch: AuthorPatch;
}>;


export type UpdateAuthorByAuthorIdMutation = (
  { __typename: 'Mutation' }
  & { updateAuthorByAuthorId?: Maybe<{ author?: Maybe<AuthorAndChildPublicationsFragment> }> }
);

export type DeleteAuthorByAuthorIdMutationVariables = Exact<{
  authorId: Scalars['String'];
}>;


export type DeleteAuthorByAuthorIdMutation = (
  { __typename: 'Mutation' }
  & { deleteAuthorByAuthorId?: Maybe<{ author?: Maybe<AuthorAndChildPublicationsFragment> }> }
);

export type AnnotationAllFragment = (
  { __typename: 'Annotation' }
  & Pick<Annotation, 'id' | 'annotationId' | 'color' | 'createdAt' | 'editedHighlightText' | 'extraEdits' | 'highlightLocation' | 'highlightText' | 'noteLocation' | 'noteText' | 'publicationId' | 'recordedAt' | 'updatedAt'>
  & { tagsByAnnotationTagAnnotationIdAndTagId: { nodes: Array<Maybe<(
      { __typename: 'Tag' }
      & Pick<Tag, 'id' | 'tagId' | 'tagName'>
    )>> } }
);

export type PublicationAuthorAnnotationCountFragment = (
  { __typename: 'Publication' }
  & Pick<Publication, 'accountId' | 'additionalMeta' | 'createdAt' | 'id' | 'publicationId' | 'title' | 'updatedAt'>
  & { annotationsByPublicationId: Pick<AnnotationsConnection, 'totalCount'>, authorsByPublicationAuthorPublicationIdAndAuthorId: { nodes: Array<Maybe<Pick<Author, 'authorId' | 'fullName'>>> } }
);

export type TagAndCountFragment = (
  Pick<Tag, 'tagId' | 'tagName' | 'id'>
  & { annotationTagsByTagId: Pick<AnnotationTagsConnection, 'totalCount'> }
);

export type GetAllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTagsQuery = { allTags?: Maybe<{ nodes: Array<Maybe<TagAndCountFragment>> }> };

export type GetTagByTagIdQueryVariables = Exact<{
  tagId: Scalars['String'];
}>;


export type GetTagByTagIdQuery = { tagByTagId?: Maybe<TagAndCountFragment> };

export type UpdateTagByTagIdMutationVariables = Exact<{
  tagId: Scalars['String'];
  tagPatch: TagPatch;
}>;


export type UpdateTagByTagIdMutation = (
  { __typename: 'Mutation' }
  & { updateTagByTagId?: Maybe<{ tag?: Maybe<TagAndCountFragment> }> }
);

export type DeleteTagByTagIdMutationVariables = Exact<{
  tagId: Scalars['String'];
}>;


export type DeleteTagByTagIdMutation = (
  { __typename: 'Mutation' }
  & { deleteTagByTagId?: Maybe<(
    Pick<DeleteTagPayload, 'deletedTagId'>
    & { tag?: Maybe<Pick<Tag, 'tagId' | 'tagName'>> }
  )> }
);

export type GetHomePageCountsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageCountsQuery = { allAnnotations?: Maybe<Pick<AnnotationsConnection, 'totalCount'>>, allTags?: Maybe<Pick<TagsConnection, 'totalCount'>>, allAuthors?: Maybe<Pick<AuthorsConnection, 'totalCount'>>, allPublications?: Maybe<Pick<PublicationsConnection, 'totalCount'>> };

export type GetAllAnnotationsForPublicationQueryVariables = Exact<{
  publicationId: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
  afterCursor?: Maybe<Scalars['Cursor']>;
}>;


export type GetAllAnnotationsForPublicationQuery = { allAnnotations?: Maybe<(
    Pick<AnnotationsConnection, 'totalCount'>
    & { edges: Array<(
      Pick<AnnotationsEdge, 'cursor'>
      & { node?: Maybe<AnnotationAllFragment> }
    )>, pageInfo: Pick<PageInfo, 'endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor'> }
  )> };

export type GetAllPublicationsQueryVariables = Exact<{
  accountId: Scalars['UUID'];
  orderBy?: Maybe<Array<PublicationsOrderBy>>;
  first?: Maybe<Scalars['Int']>;
  afterCursor?: Maybe<Scalars['Cursor']>;
}>;


export type GetAllPublicationsQuery = { allPublications?: Maybe<(
    Pick<PublicationsConnection, 'totalCount'>
    & { pageInfo: Pick<PageInfo, 'endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor'>, edges: Array<(
      Pick<PublicationsEdge, 'cursor'>
      & { node?: Maybe<PublicationAuthorAnnotationCountFragment> }
    )> }
  )> };

export type AnnotationAndTsvFragment = (
  Pick<Annotation, 'tsv' | 'tsvRank'>
  & AnnotationAllFragment
);

export type SearchAnnotationsQueryVariables = Exact<{
  matches: Scalars['String'];
  accountId: Scalars['UUID'];
  first?: Maybe<Scalars['Int']>;
}>;


export type SearchAnnotationsQuery = { allAnnotations?: Maybe<(
    Pick<AnnotationsConnection, 'totalCount'>
    & { edges: Array<(
      Pick<AnnotationsEdge, 'cursor'>
      & { node?: Maybe<AnnotationAndTsvFragment> }
    )>, pageInfo: Pick<PageInfo, 'endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor'> }
  )> };

export type GetAllAnnotationsForTagQueryVariables = Exact<{
  tagId: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Cursor']>;
}>;


export type GetAllAnnotationsForTagQuery = { allAnnotationTags?: Maybe<(
    Pick<AnnotationTagsConnection, 'totalCount'>
    & { edges: Array<(
      Pick<AnnotationTagsEdge, 'cursor'>
      & { node?: Maybe<{ annotationByAnnotationId?: Maybe<AnnotationAndPublicationFragment> }> }
    )>, pageInfo: Pick<PageInfo, 'endCursor' | 'hasNextPage' | 'startCursor' | 'hasPreviousPage'> }
  )> };

export const AnnotationAllFragmentDoc: DocumentNode<AnnotationAllFragment, unknown> = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AnnotationAll"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Annotation"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"annotationId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"color"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"editedHighlightText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"extraEdits"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"highlightLocation"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"highlightText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"noteLocation"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"noteText"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"publicationId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"recordedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tagsByAnnotationTagAnnotationIdAndTagId"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tagId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tagName"},"arguments":[],"directives":[]}]}}]}}]}}]};
export const PublicationAuthorAnnotationCountFragmentDoc: DocumentNode<PublicationAuthorAnnotationCountFragment, unknown> = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PublicationAuthorAnnotationCount"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Publication"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"accountId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"additionalMeta"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"publicationId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"annotationsByPublicationId"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"authorsByPublicationAuthorPublicationIdAndAuthorId"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fullName"},"arguments":[],"directives":[]}]}}]}}]}}]};
export const AnnotationAndPublicationFragmentDoc: DocumentNode<AnnotationAndPublicationFragment, unknown> = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AnnotationAndPublication"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Annotation"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AnnotationAll"},"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"publicationByPublicationId"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicationAuthorAnnotationCount"},"directives":[]}]}}]}},...AnnotationAllFragmentDoc.definitions,...PublicationAuthorAnnotationCountFragmentDoc.definitions]};
export const AuthorAndPublicationCountFragmentDoc: DocumentNode<AuthorAndPublicationCountFragment, unknown> = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthorAndPublicationCount"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"authorId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fullName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"publicationAuthorsByAuthorId"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}}]}}]};
export const AuthorAndChildPublicationsFragmentDoc: DocumentNode<AuthorAndChildPublicationsFragment, unknown> = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthorAndChildPublications"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"authorId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fullName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"publicationAuthorsByAuthorId"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicationByPublicationId"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"title"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"publicationId"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}}]}}]};
export const DeletedAuthorAndUpdatedPublicationsFragmentDoc: DocumentNode<DeletedAuthorAndUpdatedPublicationsFragment, unknown> = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedAuthorAndUpdatedPublications"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"authorId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fullName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"publicationAuthorsByAuthorId"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicationByPublicationId"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicationAuthorAnnotationCount"},"directives":[]}]}}]}}]}}]}},...PublicationAuthorAnnotationCountFragmentDoc.definitions]};
export const TagAndCountFragmentDoc: DocumentNode<TagAndCountFragment, unknown> = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TagAndCount"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"annotationTagsByTagId"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"tagId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tagName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]};
export const AnnotationAndTsvFragmentDoc: DocumentNode<AnnotationAndTsvFragment, unknown> = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AnnotationAndTsv"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Annotation"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AnnotationAll"},"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tsv"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tsvRank"},"arguments":[],"directives":[]}]}},...AnnotationAllFragmentDoc.definitions]};
export const UpdateAnnotationDocument: DocumentNode<UpdateAnnotationMutation, UpdateAnnotationMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAnnotation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inputAnnotation"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAnnotationInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updateAnnotation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inputAnnotation"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"annotation"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AnnotationAll"},"directives":[]}]}}]}}]}},...AnnotationAllFragmentDoc.definitions]};
export const DeleteAnnotationDocument: DocumentNode<DeleteAnnotationMutation, DeleteAnnotationMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAnnotation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"annotationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"deleteAnnotationByAnnotationId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"annotationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"annotationId"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletedAnnotationId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"annotation"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AnnotationAll"},"directives":[]}]}}]}}]}},...AnnotationAllFragmentDoc.definitions]};
export const GetAnnotationAndPublicationDocument: DocumentNode<GetAnnotationAndPublicationQuery, GetAnnotationAndPublicationQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAnnotationAndPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"annotation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AnnotationAndPublication"},"directives":[]}]}}]}},...AnnotationAndPublicationFragmentDoc.definitions]};
export const GetAnnotationDocument: DocumentNode<GetAnnotationQuery, GetAnnotationQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAnnotation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"annotation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AnnotationAll"},"directives":[]}]}}]}},...AnnotationAllFragmentDoc.definitions]};
export const AddTagToAnnotationDocument: DocumentNode<AddTagToAnnotationMutation, AddTagToAnnotationMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddTagToAnnotation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"annotationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tagId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAnnotationTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"annotationTag"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"annotationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"annotationId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tagId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tagId"}}}]}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"annotationByAnnotationId"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AnnotationAll"},"directives":[]}]}}]}}]}},...AnnotationAllFragmentDoc.definitions]};
export const CreateTagAndAddToAnnotationDocument: DocumentNode<CreateTagAndAddToAnnotationMutation, CreateTagAndAddToAnnotationMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTagAndAddToAnnotation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tagId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tagName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"annotationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tag"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tagId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tagId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tagName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tagName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"annotationTagsUsingTagId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"create"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"annotationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"annotationId"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"accountId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountId"}}}]}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TagAndCount"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"query"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"annotationByAnnotationId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"annotationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"annotationId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AnnotationAll"},"directives":[]}]}}]}}]}}]}},...TagAndCountFragmentDoc.definitions,...AnnotationAllFragmentDoc.definitions]};
export const DeleteAnnotationTagDocument: DocumentNode<DeleteAnnotationTagMutation, DeleteAnnotationTagMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAnnotationTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"annotationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tagId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"deleteAnnotationTagByAnnotationIdAndTagId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"annotationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"annotationId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tagId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tagId"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagByTagId"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TagAndCount"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"annotationByAnnotationId"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AnnotationAll"},"directives":[]}]}}]}}]}},...TagAndCountFragmentDoc.definitions,...AnnotationAllFragmentDoc.definitions]};
export const CreateAnnotationDocument: DocumentNode<CreateAnnotationMutation, CreateAnnotationMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAnnotation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inputAnnotation"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAnnotationInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createAnnotation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inputAnnotation"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"annotationEdge"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AnnotationAll"},"directives":[]}]}}]}}]}}]}},...AnnotationAllFragmentDoc.definitions]};
export const GetPublicationByPublicationIdDocument: DocumentNode<GetPublicationByPublicationIdQuery, GetPublicationByPublicationIdQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPublicationByPublicationId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publicationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicationByPublicationId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"publicationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publicationId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicationAuthorAnnotationCount"},"directives":[]}]}}]}},...PublicationAuthorAnnotationCountFragmentDoc.definitions]};
export const AddAuthorToPublicationDocument: DocumentNode<AddAuthorToPublicationMutation, AddAuthorToPublicationMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddAuthorToPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publicationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createPublicationAuthor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"publicationAuthor"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"authorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"publicationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publicationId"}}}]}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicationByPublicationId"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicationAuthorAnnotationCount"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"authorByAuthorId"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthorAndPublicationCount"},"directives":[]}]}}]}}]}},...PublicationAuthorAnnotationCountFragmentDoc.definitions,...AuthorAndPublicationCountFragmentDoc.definitions]};
export const CreateAuthorAndAddToPublicationDocument: DocumentNode<CreateAuthorAndAddToPublicationMutation, CreateAuthorAndAddToPublicationMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAuthorAndAddToPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fullName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publicationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createAuthor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"author"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"authorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"fullName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fullName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"publicationAuthorsUsingAuthorId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"create"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"publicationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publicationId"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"accountId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountId"}}}]}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthorAndPublicationCount"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"query"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicationByPublicationId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"publicationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publicationId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicationAuthorAnnotationCount"},"directives":[]}]}}]}}]}}]}},...AuthorAndPublicationCountFragmentDoc.definitions,...PublicationAuthorAnnotationCountFragmentDoc.definitions]};
export const DeletePublicationAuthorDocument: DocumentNode<DeletePublicationAuthorMutation, DeletePublicationAuthorMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePublicationAuthor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publicationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"deletePublicationAuthorByPublicationIdAndAuthorId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"publicationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publicationId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"authorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicationByPublicationId"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicationAuthorAnnotationCount"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"authorByAuthorId"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthorAndPublicationCount"},"directives":[]}]}}]}}]}},...PublicationAuthorAnnotationCountFragmentDoc.definitions,...AuthorAndPublicationCountFragmentDoc.definitions]};
export const UpdatePublicationDocument: DocumentNode<UpdatePublicationMutation, UpdatePublicationMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inputPublication"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePublicationByPublicationIdInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatePublicationByPublicationId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inputPublication"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicationAuthorAnnotationCount"},"directives":[]}]}}]}}]}},...PublicationAuthorAnnotationCountFragmentDoc.definitions]};
export const GetAllAuthorsDocument: DocumentNode<GetAllAuthorsQuery, GetAllAuthorsQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllAuthors"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAuthors"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthorAndPublicationCount"},"directives":[]}]}}]}}]}},...AuthorAndPublicationCountFragmentDoc.definitions]};
export const GetAllAuthorsAndChildPublicationsDocument: DocumentNode<GetAllAuthorsAndChildPublicationsQuery, GetAllAuthorsAndChildPublicationsQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllAuthorsAndChildPublications"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAuthors"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthorAndChildPublications"},"directives":[]}]}}]}}]}},...AuthorAndChildPublicationsFragmentDoc.definitions]};
export const GetAuthorAndChildPublicationsDocument: DocumentNode<GetAuthorAndChildPublicationsQuery, GetAuthorAndChildPublicationsQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAuthorAndChildPublications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthorAndChildPublications"},"directives":[]}]}}]}},...AuthorAndChildPublicationsFragmentDoc.definitions]};
export const UpdateAuthorByAuthorIdDocument: DocumentNode<UpdateAuthorByAuthorIdMutation, UpdateAuthorByAuthorIdMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAuthorByAuthorId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorPatch"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthorPatch"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updateAuthorByAuthorId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"authorPatch"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorPatch"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"authorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthorAndChildPublications"},"directives":[]}]}}]}}]}},...AuthorAndChildPublicationsFragmentDoc.definitions]};
export const DeleteAuthorByAuthorIdDocument: DocumentNode<DeleteAuthorByAuthorIdMutation, DeleteAuthorByAuthorIdMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAuthorByAuthorId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"deleteAuthorByAuthorId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"authorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthorAndChildPublications"},"directives":[]}]}}]}}]}},...AuthorAndChildPublicationsFragmentDoc.definitions]};
export const GetAllTagsDocument: DocumentNode<GetAllTagsQuery, GetAllTagsQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllTags"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allTags"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TagAndCount"},"directives":[]}]}}]}}]}},...TagAndCountFragmentDoc.definitions]};
export const GetTagByTagIdDocument: DocumentNode<GetTagByTagIdQuery, GetTagByTagIdQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTagByTagId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tagId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagByTagId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tagId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tagId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TagAndCount"},"directives":[]}]}}]}},...TagAndCountFragmentDoc.definitions]};
export const UpdateTagByTagIdDocument: DocumentNode<UpdateTagByTagIdMutation, UpdateTagByTagIdMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTagByTagId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tagId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tagPatch"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TagPatch"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updateTagByTagId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tagPatch"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tagPatch"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tagId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tagId"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TagAndCount"},"directives":[]}]}}]}}]}},...TagAndCountFragmentDoc.definitions]};
export const DeleteTagByTagIdDocument: DocumentNode<DeleteTagByTagIdMutation, DeleteTagByTagIdMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTagByTagId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tagId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"deleteTagByTagId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tagId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tagId"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletedTagId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tag"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tagId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tagName"},"arguments":[],"directives":[]}]}}]}}]}}]};
export const GetHomePageCountsDocument: DocumentNode<GetHomePageCountsQuery, GetHomePageCountsQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHomePageCounts"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAnnotations"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"allTags"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"allAuthors"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"allPublications"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}}]}}]};
export const GetAllAnnotationsForPublicationDocument: DocumentNode<GetAllAnnotationsForPublicationQuery, GetAllAnnotationsForPublicationQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllAnnotationsForPublication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publicationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"afterCursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAnnotations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"publicationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publicationId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"afterCursor"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AnnotationAll"},"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"startCursor"},"arguments":[],"directives":[]}]}}]}}]}},...AnnotationAllFragmentDoc.definitions]};
export const GetAllPublicationsDocument: DocumentNode<GetAllPublicationsQuery, GetAllPublicationsQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllPublications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationsOrderBy"}}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"afterCursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPublications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"accountId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"afterCursor"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"startCursor"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicationAuthorAnnotationCount"},"directives":[]}]}}]}}]}}]}},...PublicationAuthorAnnotationCountFragmentDoc.definitions]};
export const SearchAnnotationsDocument: DocumentNode<SearchAnnotationsQuery, SearchAnnotationsQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchAnnotations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"matches"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAnnotations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"TSV_RANK_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tsv"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"matches"},"value":{"kind":"Variable","name":{"kind":"Name","value":"matches"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"accountId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AnnotationAndTsv"},"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"startCursor"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}}]}},...AnnotationAndTsvFragmentDoc.definitions]};
export const GetAllAnnotationsForTagDocument: DocumentNode<GetAllAnnotationsForTagQuery, GetAllAnnotationsForTagQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllAnnotationsForTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tagId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAnnotationTags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tagId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tagId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"annotationByAnnotationId"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AnnotationAndPublication"},"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"startCursor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"},"arguments":[],"directives":[]}]}}]}}]}},...AnnotationAndPublicationFragmentDoc.definitions]};