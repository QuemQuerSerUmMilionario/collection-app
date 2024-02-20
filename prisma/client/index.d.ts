
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model PasswordResetToken
 * 
 */
export type PasswordResetToken = $Result.DefaultSelection<Prisma.$PasswordResetTokenPayload>
/**
 * Model TwoFactorToken
 * 
 */
export type TwoFactorToken = $Result.DefaultSelection<Prisma.$TwoFactorTokenPayload>
/**
 * Model TwoFactorConfirmation
 * 
 */
export type TwoFactorConfirmation = $Result.DefaultSelection<Prisma.$TwoFactorConfirmationPayload>
/**
 * Model Collection
 * 
 */
export type Collection = $Result.DefaultSelection<Prisma.$CollectionPayload>
/**
 * Model TypeModel
 * 
 */
export type TypeModel = $Result.DefaultSelection<Prisma.$TypeModelPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model ItemImage
 * 
 */
export type ItemImage = $Result.DefaultSelection<Prisma.$ItemImagePayload>
/**
 * Model UserCollection
 * 
 */
export type UserCollection = $Result.DefaultSelection<Prisma.$UserCollectionPayload>
/**
 * Model UserItem
 * 
 */
export type UserItem = $Result.DefaultSelection<Prisma.$UserItemPayload>
/**
 * Model UserItemImage
 * 
 */
export type UserItemImage = $Result.DefaultSelection<Prisma.$UserItemImagePayload>
/**
 * Model LogStripeWebhook
 * 
 */
export type LogStripeWebhook = $Result.DefaultSelection<Prisma.$LogStripeWebhookPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetToken.findMany()
    * ```
    */
  get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs>;

  /**
   * `prisma.twoFactorToken`: Exposes CRUD operations for the **TwoFactorToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TwoFactorTokens
    * const twoFactorTokens = await prisma.twoFactorToken.findMany()
    * ```
    */
  get twoFactorToken(): Prisma.TwoFactorTokenDelegate<ExtArgs>;

  /**
   * `prisma.twoFactorConfirmation`: Exposes CRUD operations for the **TwoFactorConfirmation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TwoFactorConfirmations
    * const twoFactorConfirmations = await prisma.twoFactorConfirmation.findMany()
    * ```
    */
  get twoFactorConfirmation(): Prisma.TwoFactorConfirmationDelegate<ExtArgs>;

  /**
   * `prisma.collection`: Exposes CRUD operations for the **Collection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collections
    * const collections = await prisma.collection.findMany()
    * ```
    */
  get collection(): Prisma.CollectionDelegate<ExtArgs>;

  /**
   * `prisma.typeModel`: Exposes CRUD operations for the **TypeModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TypeModels
    * const typeModels = await prisma.typeModel.findMany()
    * ```
    */
  get typeModel(): Prisma.TypeModelDelegate<ExtArgs>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs>;

  /**
   * `prisma.itemImage`: Exposes CRUD operations for the **ItemImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemImages
    * const itemImages = await prisma.itemImage.findMany()
    * ```
    */
  get itemImage(): Prisma.ItemImageDelegate<ExtArgs>;

  /**
   * `prisma.userCollection`: Exposes CRUD operations for the **UserCollection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCollections
    * const userCollections = await prisma.userCollection.findMany()
    * ```
    */
  get userCollection(): Prisma.UserCollectionDelegate<ExtArgs>;

  /**
   * `prisma.userItem`: Exposes CRUD operations for the **UserItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserItems
    * const userItems = await prisma.userItem.findMany()
    * ```
    */
  get userItem(): Prisma.UserItemDelegate<ExtArgs>;

  /**
   * `prisma.userItemImage`: Exposes CRUD operations for the **UserItemImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserItemImages
    * const userItemImages = await prisma.userItemImage.findMany()
    * ```
    */
  get userItemImage(): Prisma.UserItemImageDelegate<ExtArgs>;

  /**
   * `prisma.logStripeWebhook`: Exposes CRUD operations for the **LogStripeWebhook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogStripeWebhooks
    * const logStripeWebhooks = await prisma.logStripeWebhook.findMany()
    * ```
    */
  get logStripeWebhook(): Prisma.LogStripeWebhookDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.1
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Plan: 'Plan',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    PasswordResetToken: 'PasswordResetToken',
    TwoFactorToken: 'TwoFactorToken',
    TwoFactorConfirmation: 'TwoFactorConfirmation',
    Collection: 'Collection',
    TypeModel: 'TypeModel',
    Item: 'Item',
    ItemImage: 'ItemImage',
    UserCollection: 'UserCollection',
    UserItem: 'UserItem',
    UserItemImage: 'UserItemImage',
    LogStripeWebhook: 'LogStripeWebhook'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'account' | 'plan' | 'session' | 'user' | 'verificationToken' | 'passwordResetToken' | 'twoFactorToken' | 'twoFactorConfirmation' | 'collection' | 'typeModel' | 'item' | 'itemImage' | 'userCollection' | 'userItem' | 'userItemImage' | 'logStripeWebhook'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>,
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetToken: {
        payload: Prisma.$PasswordResetTokenPayload<ExtArgs>
        fields: Prisma.PasswordResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findMany: {
            args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          create: {
            args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          createMany: {
            args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          update: {
            args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePasswordResetToken>
          }
          groupBy: {
            args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<PasswordResetTokenCountAggregateOutputType> | number
          }
        }
      }
      TwoFactorToken: {
        payload: Prisma.$TwoFactorTokenPayload<ExtArgs>
        fields: Prisma.TwoFactorTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TwoFactorTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TwoFactorTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload>
          }
          findFirst: {
            args: Prisma.TwoFactorTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TwoFactorTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload>
          }
          findMany: {
            args: Prisma.TwoFactorTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload>[]
          }
          create: {
            args: Prisma.TwoFactorTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload>
          }
          createMany: {
            args: Prisma.TwoFactorTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TwoFactorTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload>
          }
          update: {
            args: Prisma.TwoFactorTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload>
          }
          deleteMany: {
            args: Prisma.TwoFactorTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TwoFactorTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TwoFactorTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload>
          }
          aggregate: {
            args: Prisma.TwoFactorTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTwoFactorToken>
          }
          groupBy: {
            args: Prisma.TwoFactorTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TwoFactorTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TwoFactorTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<TwoFactorTokenCountAggregateOutputType> | number
          }
        }
      }
      TwoFactorConfirmation: {
        payload: Prisma.$TwoFactorConfirmationPayload<ExtArgs>
        fields: Prisma.TwoFactorConfirmationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TwoFactorConfirmationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TwoFactorConfirmationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload>
          }
          findFirst: {
            args: Prisma.TwoFactorConfirmationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TwoFactorConfirmationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload>
          }
          findMany: {
            args: Prisma.TwoFactorConfirmationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload>[]
          }
          create: {
            args: Prisma.TwoFactorConfirmationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload>
          }
          createMany: {
            args: Prisma.TwoFactorConfirmationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TwoFactorConfirmationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload>
          }
          update: {
            args: Prisma.TwoFactorConfirmationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload>
          }
          deleteMany: {
            args: Prisma.TwoFactorConfirmationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TwoFactorConfirmationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TwoFactorConfirmationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload>
          }
          aggregate: {
            args: Prisma.TwoFactorConfirmationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTwoFactorConfirmation>
          }
          groupBy: {
            args: Prisma.TwoFactorConfirmationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TwoFactorConfirmationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TwoFactorConfirmationCountArgs<ExtArgs>,
            result: $Utils.Optional<TwoFactorConfirmationCountAggregateOutputType> | number
          }
        }
      }
      Collection: {
        payload: Prisma.$CollectionPayload<ExtArgs>
        fields: Prisma.CollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findFirst: {
            args: Prisma.CollectionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findMany: {
            args: Prisma.CollectionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          create: {
            args: Prisma.CollectionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          createMany: {
            args: Prisma.CollectionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CollectionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          update: {
            args: Prisma.CollectionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          deleteMany: {
            args: Prisma.CollectionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CollectionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          aggregate: {
            args: Prisma.CollectionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCollection>
          }
          groupBy: {
            args: Prisma.CollectionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CollectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollectionCountArgs<ExtArgs>,
            result: $Utils.Optional<CollectionCountAggregateOutputType> | number
          }
        }
      }
      TypeModel: {
        payload: Prisma.$TypeModelPayload<ExtArgs>
        fields: Prisma.TypeModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypeModelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypeModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypeModelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypeModelPayload>
          }
          findFirst: {
            args: Prisma.TypeModelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypeModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypeModelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypeModelPayload>
          }
          findMany: {
            args: Prisma.TypeModelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypeModelPayload>[]
          }
          create: {
            args: Prisma.TypeModelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypeModelPayload>
          }
          createMany: {
            args: Prisma.TypeModelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TypeModelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypeModelPayload>
          }
          update: {
            args: Prisma.TypeModelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypeModelPayload>
          }
          deleteMany: {
            args: Prisma.TypeModelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TypeModelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TypeModelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypeModelPayload>
          }
          aggregate: {
            args: Prisma.TypeModelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTypeModel>
          }
          groupBy: {
            args: Prisma.TypeModelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TypeModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.TypeModelCountArgs<ExtArgs>,
            result: $Utils.Optional<TypeModelCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>,
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      ItemImage: {
        payload: Prisma.$ItemImagePayload<ExtArgs>
        fields: Prisma.ItemImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemImageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemImageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload>
          }
          findFirst: {
            args: Prisma.ItemImageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemImageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload>
          }
          findMany: {
            args: Prisma.ItemImageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload>[]
          }
          create: {
            args: Prisma.ItemImageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload>
          }
          createMany: {
            args: Prisma.ItemImageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ItemImageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload>
          }
          update: {
            args: Prisma.ItemImageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload>
          }
          deleteMany: {
            args: Prisma.ItemImageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ItemImageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ItemImageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemImagePayload>
          }
          aggregate: {
            args: Prisma.ItemImageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateItemImage>
          }
          groupBy: {
            args: Prisma.ItemImageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ItemImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemImageCountArgs<ExtArgs>,
            result: $Utils.Optional<ItemImageCountAggregateOutputType> | number
          }
        }
      }
      UserCollection: {
        payload: Prisma.$UserCollectionPayload<ExtArgs>
        fields: Prisma.UserCollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCollectionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCollectionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCollectionPayload>
          }
          findFirst: {
            args: Prisma.UserCollectionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCollectionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCollectionPayload>
          }
          findMany: {
            args: Prisma.UserCollectionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCollectionPayload>[]
          }
          create: {
            args: Prisma.UserCollectionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCollectionPayload>
          }
          createMany: {
            args: Prisma.UserCollectionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserCollectionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCollectionPayload>
          }
          update: {
            args: Prisma.UserCollectionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCollectionPayload>
          }
          deleteMany: {
            args: Prisma.UserCollectionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserCollectionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserCollectionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCollectionPayload>
          }
          aggregate: {
            args: Prisma.UserCollectionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserCollection>
          }
          groupBy: {
            args: Prisma.UserCollectionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserCollectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCollectionCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCollectionCountAggregateOutputType> | number
          }
        }
      }
      UserItem: {
        payload: Prisma.$UserItemPayload<ExtArgs>
        fields: Prisma.UserItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload>
          }
          findFirst: {
            args: Prisma.UserItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload>
          }
          findMany: {
            args: Prisma.UserItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload>[]
          }
          create: {
            args: Prisma.UserItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload>
          }
          createMany: {
            args: Prisma.UserItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload>
          }
          update: {
            args: Prisma.UserItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload>
          }
          deleteMany: {
            args: Prisma.UserItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload>
          }
          aggregate: {
            args: Prisma.UserItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserItem>
          }
          groupBy: {
            args: Prisma.UserItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserItemCountArgs<ExtArgs>,
            result: $Utils.Optional<UserItemCountAggregateOutputType> | number
          }
        }
      }
      UserItemImage: {
        payload: Prisma.$UserItemImagePayload<ExtArgs>
        fields: Prisma.UserItemImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserItemImageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserItemImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserItemImageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserItemImagePayload>
          }
          findFirst: {
            args: Prisma.UserItemImageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserItemImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserItemImageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserItemImagePayload>
          }
          findMany: {
            args: Prisma.UserItemImageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserItemImagePayload>[]
          }
          create: {
            args: Prisma.UserItemImageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserItemImagePayload>
          }
          createMany: {
            args: Prisma.UserItemImageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserItemImageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserItemImagePayload>
          }
          update: {
            args: Prisma.UserItemImageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserItemImagePayload>
          }
          deleteMany: {
            args: Prisma.UserItemImageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserItemImageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserItemImageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserItemImagePayload>
          }
          aggregate: {
            args: Prisma.UserItemImageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserItemImage>
          }
          groupBy: {
            args: Prisma.UserItemImageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserItemImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserItemImageCountArgs<ExtArgs>,
            result: $Utils.Optional<UserItemImageCountAggregateOutputType> | number
          }
        }
      }
      LogStripeWebhook: {
        payload: Prisma.$LogStripeWebhookPayload<ExtArgs>
        fields: Prisma.LogStripeWebhookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogStripeWebhookFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogStripeWebhookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogStripeWebhookFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogStripeWebhookPayload>
          }
          findFirst: {
            args: Prisma.LogStripeWebhookFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogStripeWebhookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogStripeWebhookFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogStripeWebhookPayload>
          }
          findMany: {
            args: Prisma.LogStripeWebhookFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogStripeWebhookPayload>[]
          }
          create: {
            args: Prisma.LogStripeWebhookCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogStripeWebhookPayload>
          }
          createMany: {
            args: Prisma.LogStripeWebhookCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LogStripeWebhookDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogStripeWebhookPayload>
          }
          update: {
            args: Prisma.LogStripeWebhookUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogStripeWebhookPayload>
          }
          deleteMany: {
            args: Prisma.LogStripeWebhookDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LogStripeWebhookUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LogStripeWebhookUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LogStripeWebhookPayload>
          }
          aggregate: {
            args: Prisma.LogStripeWebhookAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLogStripeWebhook>
          }
          groupBy: {
            args: Prisma.LogStripeWebhookGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LogStripeWebhookGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogStripeWebhookCountArgs<ExtArgs>,
            result: $Utils.Optional<LogStripeWebhookCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    users: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | PlanCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    userCollections: number
    items: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    userCollections?: boolean | UserCountOutputTypeCountUserCollectionsArgs
    items?: boolean | UserCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCollectionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }



  /**
   * Count Type CollectionCountOutputType
   */

  export type CollectionCountOutputType = {
    collections: number
    items: number
  }

  export type CollectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collections?: boolean | CollectionCountOutputTypeCountCollectionsArgs
    items?: boolean | CollectionCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionCountOutputType
     */
    select?: CollectionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeCountCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCollectionWhereInput
  }


  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }



  /**
   * Count Type TypeModelCountOutputType
   */

  export type TypeModelCountOutputType = {
    items: number
  }

  export type TypeModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | TypeModelCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes

  /**
   * TypeModelCountOutputType without action
   */
  export type TypeModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeModelCountOutputType
     */
    select?: TypeModelCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TypeModelCountOutputType without action
   */
  export type TypeModelCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }



  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    itemImages: number
    userItem: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itemImages?: boolean | ItemCountOutputTypeCountItemImagesArgs
    userItem?: boolean | ItemCountOutputTypeCountUserItemArgs
  }

  // Custom InputTypes

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountItemImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemImageWhereInput
  }


  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountUserItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserItemWhereInput
  }



  /**
   * Count Type UserCollectionCountOutputType
   */

  export type UserCollectionCountOutputType = {
    childCollections: number
    items: number
  }

  export type UserCollectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    childCollections?: boolean | UserCollectionCountOutputTypeCountChildCollectionsArgs
    items?: boolean | UserCollectionCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes

  /**
   * UserCollectionCountOutputType without action
   */
  export type UserCollectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollectionCountOutputType
     */
    select?: UserCollectionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCollectionCountOutputType without action
   */
  export type UserCollectionCountOutputTypeCountChildCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCollectionWhereInput
  }


  /**
   * UserCollectionCountOutputType without action
   */
  export type UserCollectionCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserItemWhereInput
  }



  /**
   * Count Type UserItemCountOutputType
   */

  export type UserItemCountOutputType = {
    itemImages: number
  }

  export type UserItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itemImages?: boolean | UserItemCountOutputTypeCountItemImagesArgs
  }

  // Custom InputTypes

  /**
   * UserItemCountOutputType without action
   */
  export type UserItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItemCountOutputType
     */
    select?: UserItemCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserItemCountOutputType without action
   */
  export type UserItemCountOutputTypeCountItemImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserItemImageWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }


  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
  }



  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanMinAggregateOutputType = {
    id: string | null
    priceId: string | null
    description: string | null
  }

  export type PlanMaxAggregateOutputType = {
    id: string | null
    priceId: string | null
    description: string | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    priceId: number
    description: number
    _all: number
  }


  export type PlanMinAggregateInputType = {
    id?: true
    priceId?: true
    description?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    priceId?: true
    description?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    priceId?: true
    description?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: string
    priceId: string
    description: string
    _count: PlanCountAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    priceId?: boolean
    description?: boolean
    users?: boolean | Plan$usersArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    id?: boolean
    priceId?: boolean
    description?: boolean
  }

  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Plan$usersArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      priceId: string
      description: string
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }


  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>
    ): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Plan that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>
    ): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
    **/
    create<T extends PlanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PlanCreateArgs<ExtArgs>>
    ): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Plans.
     *     @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     *     @example
     *     // Create many Plans
     *     const plan = await prisma.plan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
    **/
    delete<T extends PlanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>
    ): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>
    ): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
    **/
    upsert<T extends PlanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>
    ): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends Plan$usersArgs<ExtArgs> = {}>(args?: Subset<T, Plan$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Plan model
   */ 
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'String'>
    readonly priceId: FieldRef<"Plan", 'String'>
    readonly description: FieldRef<"Plan", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }


  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }


  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }


  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }


  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }


  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }


  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }


  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
  }


  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }


  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }


  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
  }


  /**
   * Plan.users
   */
  export type Plan$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
  }



  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }


  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    cpf: string | null
    emailVerified: Date | null
    image: string | null
    planId: string | null
    custumerId: string | null
    isTwoFactorEnabled: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    cpf: string | null
    emailVerified: Date | null
    image: string | null
    planId: string | null
    custumerId: string | null
    isTwoFactorEnabled: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone: number
    cpf: number
    emailVerified: number
    image: number
    planId: number
    custumerId: number
    isTwoFactorEnabled: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    cpf?: true
    emailVerified?: true
    image?: true
    planId?: true
    custumerId?: true
    isTwoFactorEnabled?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    cpf?: true
    emailVerified?: true
    image?: true
    planId?: true
    custumerId?: true
    isTwoFactorEnabled?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    cpf?: true
    emailVerified?: true
    image?: true
    planId?: true
    custumerId?: true
    isTwoFactorEnabled?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    cpf: string | null
    emailVerified: Date | null
    image: string | null
    planId: string | null
    custumerId: string | null
    isTwoFactorEnabled: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    cpf?: boolean
    emailVerified?: boolean
    image?: boolean
    planId?: boolean
    custumerId?: boolean
    isTwoFactorEnabled?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    userCollections?: boolean | User$userCollectionsArgs<ExtArgs>
    items?: boolean | User$itemsArgs<ExtArgs>
    twoFactorConfirmation?: boolean | User$twoFactorConfirmationArgs<ExtArgs>
    plan?: boolean | User$planArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    cpf?: boolean
    emailVerified?: boolean
    image?: boolean
    planId?: boolean
    custumerId?: boolean
    isTwoFactorEnabled?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    userCollections?: boolean | User$userCollectionsArgs<ExtArgs>
    items?: boolean | User$itemsArgs<ExtArgs>
    twoFactorConfirmation?: boolean | User$twoFactorConfirmationArgs<ExtArgs>
    plan?: boolean | User$planArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      userCollections: Prisma.$UserCollectionPayload<ExtArgs>[]
      items: Prisma.$ItemPayload<ExtArgs>[]
      twoFactorConfirmation: Prisma.$TwoFactorConfirmationPayload<ExtArgs> | null
      plan: Prisma.$PlanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      password: string | null
      phone: string | null
      cpf: string | null
      emailVerified: Date | null
      image: string | null
      planId: string | null
      custumerId: string | null
      isTwoFactorEnabled: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'> | Null>;

    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    userCollections<T extends User$userCollectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$userCollectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCollectionPayload<ExtArgs>, T, 'findMany'> | Null>;

    items<T extends User$itemsArgs<ExtArgs> = {}>(args?: Subset<T, User$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    twoFactorConfirmation<T extends User$twoFactorConfirmationArgs<ExtArgs> = {}>(args?: Subset<T, User$twoFactorConfirmationArgs<ExtArgs>>): Prisma__TwoFactorConfirmationClient<$Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    plan<T extends User$planArgs<ExtArgs> = {}>(args?: Subset<T, User$planArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly cpf: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly planId: FieldRef<"User", 'String'>
    readonly custumerId: FieldRef<"User", 'String'>
    readonly isTwoFactorEnabled: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * User.userCollections
   */
  export type User$userCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollection
     */
    select?: UserCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCollectionInclude<ExtArgs> | null
    where?: UserCollectionWhereInput
    orderBy?: UserCollectionOrderByWithRelationInput | UserCollectionOrderByWithRelationInput[]
    cursor?: UserCollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCollectionScalarFieldEnum | UserCollectionScalarFieldEnum[]
  }


  /**
   * User.items
   */
  export type User$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }


  /**
   * User.twoFactorConfirmation
   */
  export type User$twoFactorConfirmationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorConfirmation
     */
    select?: TwoFactorConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwoFactorConfirmationInclude<ExtArgs> | null
    where?: TwoFactorConfirmationWhereInput
  }


  /**
   * User.plan
   */
  export type User$planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    where?: PlanWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }


  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VerificationToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
    **/
    findMany<T extends VerificationTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
    **/
    create<T extends VerificationTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VerificationTokens.
     *     @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     *     @example
     *     // Create many VerificationTokens
     *     const verificationToken = await prisma.verificationToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VerificationTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
    **/
    delete<T extends VerificationTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }


  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }


  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
  }



  /**
   * Model PasswordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  export type PasswordResetTokenMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expires: Date | null
  }

  export type PasswordResetTokenMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expires: Date | null
  }

  export type PasswordResetTokenCountAggregateOutputType = {
    id: number
    email: number
    token: number
    expires: number
    _all: number
  }


  export type PasswordResetTokenMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
  }

  export type PasswordResetTokenMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
  }

  export type PasswordResetTokenCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type PasswordResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetToken to aggregate.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetTokens
    **/
    _count?: true | PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type GetPasswordResetTokenAggregateType<T extends PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>
  }




  export type PasswordResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithAggregationInput | PasswordResetTokenOrderByWithAggregationInput[]
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum
    having?: PasswordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokenCountAggregateInputType | true
    _min?: PasswordResetTokenMinAggregateInputType
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type PasswordResetTokenGroupByOutputType = {
    id: string
    email: string
    token: string
    expires: Date
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetPasswordResetTokenGroupByPayload<T extends PasswordResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $PasswordResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      expires: Date
    }, ExtArgs["result"]["passwordResetToken"]>
    composites: {}
  }


  type PasswordResetTokenGetPayload<S extends boolean | null | undefined | PasswordResetTokenDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetTokenPayload, S>

  type PasswordResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PasswordResetTokenFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PasswordResetTokenCountAggregateInputType | true
    }

  export interface PasswordResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetToken'], meta: { name: 'PasswordResetToken' } }
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {PasswordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PasswordResetTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PasswordResetTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PasswordResetToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PasswordResetTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PasswordResetTokenFindFirstArgs<ExtArgs>>
    ): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PasswordResetTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PasswordResetTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PasswordResetToken.
     * @param {PasswordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     * 
    **/
    create<T extends PasswordResetTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PasswordResetTokenCreateArgs<ExtArgs>>
    ): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PasswordResetTokens.
     *     @param {PasswordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     *     @example
     *     // Create many PasswordResetTokens
     *     const passwordResetToken = await prisma.passwordResetToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PasswordResetTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PasswordResetTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PasswordResetToken.
     * @param {PasswordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     * 
    **/
    delete<T extends PasswordResetTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PasswordResetTokenDeleteArgs<ExtArgs>>
    ): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PasswordResetToken.
     * @param {PasswordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PasswordResetTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PasswordResetTokenUpdateArgs<ExtArgs>>
    ): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PasswordResetTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PasswordResetTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PasswordResetTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PasswordResetTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PasswordResetToken.
     * @param {PasswordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
    **/
    upsert<T extends PasswordResetTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PasswordResetTokenUpsertArgs<ExtArgs>>
    ): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetTokenCountArgs>(
      args?: Subset<T, PasswordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasswordResetTokenAggregateArgs>(args: Subset<T, PasswordResetTokenAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasswordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetToken model
   */
  readonly fields: PasswordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PasswordResetToken model
   */ 
  interface PasswordResetTokenFieldRefs {
    readonly id: FieldRef<"PasswordResetToken", 'String'>
    readonly email: FieldRef<"PasswordResetToken", 'String'>
    readonly token: FieldRef<"PasswordResetToken", 'String'>
    readonly expires: FieldRef<"PasswordResetToken", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * PasswordResetToken findUnique
   */
  export type PasswordResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }


  /**
   * PasswordResetToken findUniqueOrThrow
   */
  export type PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }


  /**
   * PasswordResetToken findFirst
   */
  export type PasswordResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }


  /**
   * PasswordResetToken findFirstOrThrow
   */
  export type PasswordResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }


  /**
   * PasswordResetToken findMany
   */
  export type PasswordResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }


  /**
   * PasswordResetToken create
   */
  export type PasswordResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
  }


  /**
   * PasswordResetToken createMany
   */
  export type PasswordResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PasswordResetToken update
   */
  export type PasswordResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetToken to update.
     */
    where: PasswordResetTokenWhereUniqueInput
  }


  /**
   * PasswordResetToken updateMany
   */
  export type PasswordResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
  }


  /**
   * PasswordResetToken upsert
   */
  export type PasswordResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetToken to update in case it exists.
     */
    where: PasswordResetTokenWhereUniqueInput
    /**
     * In case the PasswordResetToken found by the `where` argument doesn't exist, create a new PasswordResetToken with this data.
     */
    create: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
    /**
     * In case the PasswordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
  }


  /**
   * PasswordResetToken delete
   */
  export type PasswordResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Filter which PasswordResetToken to delete.
     */
    where: PasswordResetTokenWhereUniqueInput
  }


  /**
   * PasswordResetToken deleteMany
   */
  export type PasswordResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetTokens to delete
     */
    where?: PasswordResetTokenWhereInput
  }


  /**
   * PasswordResetToken without action
   */
  export type PasswordResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
  }



  /**
   * Model TwoFactorToken
   */

  export type AggregateTwoFactorToken = {
    _count: TwoFactorTokenCountAggregateOutputType | null
    _min: TwoFactorTokenMinAggregateOutputType | null
    _max: TwoFactorTokenMaxAggregateOutputType | null
  }

  export type TwoFactorTokenMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expires: Date | null
  }

  export type TwoFactorTokenMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expires: Date | null
  }

  export type TwoFactorTokenCountAggregateOutputType = {
    id: number
    email: number
    token: number
    expires: number
    _all: number
  }


  export type TwoFactorTokenMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
  }

  export type TwoFactorTokenMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
  }

  export type TwoFactorTokenCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type TwoFactorTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TwoFactorToken to aggregate.
     */
    where?: TwoFactorTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactorTokens to fetch.
     */
    orderBy?: TwoFactorTokenOrderByWithRelationInput | TwoFactorTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TwoFactorTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactorTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactorTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TwoFactorTokens
    **/
    _count?: true | TwoFactorTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TwoFactorTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TwoFactorTokenMaxAggregateInputType
  }

  export type GetTwoFactorTokenAggregateType<T extends TwoFactorTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateTwoFactorToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTwoFactorToken[P]>
      : GetScalarType<T[P], AggregateTwoFactorToken[P]>
  }




  export type TwoFactorTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TwoFactorTokenWhereInput
    orderBy?: TwoFactorTokenOrderByWithAggregationInput | TwoFactorTokenOrderByWithAggregationInput[]
    by: TwoFactorTokenScalarFieldEnum[] | TwoFactorTokenScalarFieldEnum
    having?: TwoFactorTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TwoFactorTokenCountAggregateInputType | true
    _min?: TwoFactorTokenMinAggregateInputType
    _max?: TwoFactorTokenMaxAggregateInputType
  }

  export type TwoFactorTokenGroupByOutputType = {
    id: string
    email: string
    token: string
    expires: Date
    _count: TwoFactorTokenCountAggregateOutputType | null
    _min: TwoFactorTokenMinAggregateOutputType | null
    _max: TwoFactorTokenMaxAggregateOutputType | null
  }

  type GetTwoFactorTokenGroupByPayload<T extends TwoFactorTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TwoFactorTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TwoFactorTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TwoFactorTokenGroupByOutputType[P]>
            : GetScalarType<T[P], TwoFactorTokenGroupByOutputType[P]>
        }
      >
    >


  export type TwoFactorTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["twoFactorToken"]>

  export type TwoFactorTokenSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $TwoFactorTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TwoFactorToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      expires: Date
    }, ExtArgs["result"]["twoFactorToken"]>
    composites: {}
  }


  type TwoFactorTokenGetPayload<S extends boolean | null | undefined | TwoFactorTokenDefaultArgs> = $Result.GetResult<Prisma.$TwoFactorTokenPayload, S>

  type TwoFactorTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TwoFactorTokenFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TwoFactorTokenCountAggregateInputType | true
    }

  export interface TwoFactorTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TwoFactorToken'], meta: { name: 'TwoFactorToken' } }
    /**
     * Find zero or one TwoFactorToken that matches the filter.
     * @param {TwoFactorTokenFindUniqueArgs} args - Arguments to find a TwoFactorToken
     * @example
     * // Get one TwoFactorToken
     * const twoFactorToken = await prisma.twoFactorToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TwoFactorTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TwoFactorTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__TwoFactorTokenClient<$Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TwoFactorToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TwoFactorTokenFindUniqueOrThrowArgs} args - Arguments to find a TwoFactorToken
     * @example
     * // Get one TwoFactorToken
     * const twoFactorToken = await prisma.twoFactorToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TwoFactorTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TwoFactorTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TwoFactorTokenClient<$Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TwoFactorToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorTokenFindFirstArgs} args - Arguments to find a TwoFactorToken
     * @example
     * // Get one TwoFactorToken
     * const twoFactorToken = await prisma.twoFactorToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TwoFactorTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TwoFactorTokenFindFirstArgs<ExtArgs>>
    ): Prisma__TwoFactorTokenClient<$Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TwoFactorToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorTokenFindFirstOrThrowArgs} args - Arguments to find a TwoFactorToken
     * @example
     * // Get one TwoFactorToken
     * const twoFactorToken = await prisma.twoFactorToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TwoFactorTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TwoFactorTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TwoFactorTokenClient<$Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TwoFactorTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TwoFactorTokens
     * const twoFactorTokens = await prisma.twoFactorToken.findMany()
     * 
     * // Get first 10 TwoFactorTokens
     * const twoFactorTokens = await prisma.twoFactorToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const twoFactorTokenWithIdOnly = await prisma.twoFactorToken.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TwoFactorTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TwoFactorTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TwoFactorToken.
     * @param {TwoFactorTokenCreateArgs} args - Arguments to create a TwoFactorToken.
     * @example
     * // Create one TwoFactorToken
     * const TwoFactorToken = await prisma.twoFactorToken.create({
     *   data: {
     *     // ... data to create a TwoFactorToken
     *   }
     * })
     * 
    **/
    create<T extends TwoFactorTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TwoFactorTokenCreateArgs<ExtArgs>>
    ): Prisma__TwoFactorTokenClient<$Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TwoFactorTokens.
     *     @param {TwoFactorTokenCreateManyArgs} args - Arguments to create many TwoFactorTokens.
     *     @example
     *     // Create many TwoFactorTokens
     *     const twoFactorToken = await prisma.twoFactorToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TwoFactorTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TwoFactorTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TwoFactorToken.
     * @param {TwoFactorTokenDeleteArgs} args - Arguments to delete one TwoFactorToken.
     * @example
     * // Delete one TwoFactorToken
     * const TwoFactorToken = await prisma.twoFactorToken.delete({
     *   where: {
     *     // ... filter to delete one TwoFactorToken
     *   }
     * })
     * 
    **/
    delete<T extends TwoFactorTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TwoFactorTokenDeleteArgs<ExtArgs>>
    ): Prisma__TwoFactorTokenClient<$Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TwoFactorToken.
     * @param {TwoFactorTokenUpdateArgs} args - Arguments to update one TwoFactorToken.
     * @example
     * // Update one TwoFactorToken
     * const twoFactorToken = await prisma.twoFactorToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TwoFactorTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TwoFactorTokenUpdateArgs<ExtArgs>>
    ): Prisma__TwoFactorTokenClient<$Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TwoFactorTokens.
     * @param {TwoFactorTokenDeleteManyArgs} args - Arguments to filter TwoFactorTokens to delete.
     * @example
     * // Delete a few TwoFactorTokens
     * const { count } = await prisma.twoFactorToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TwoFactorTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TwoFactorTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TwoFactorTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TwoFactorTokens
     * const twoFactorToken = await prisma.twoFactorToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TwoFactorTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TwoFactorTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TwoFactorToken.
     * @param {TwoFactorTokenUpsertArgs} args - Arguments to update or create a TwoFactorToken.
     * @example
     * // Update or create a TwoFactorToken
     * const twoFactorToken = await prisma.twoFactorToken.upsert({
     *   create: {
     *     // ... data to create a TwoFactorToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TwoFactorToken we want to update
     *   }
     * })
    **/
    upsert<T extends TwoFactorTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TwoFactorTokenUpsertArgs<ExtArgs>>
    ): Prisma__TwoFactorTokenClient<$Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TwoFactorTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorTokenCountArgs} args - Arguments to filter TwoFactorTokens to count.
     * @example
     * // Count the number of TwoFactorTokens
     * const count = await prisma.twoFactorToken.count({
     *   where: {
     *     // ... the filter for the TwoFactorTokens we want to count
     *   }
     * })
    **/
    count<T extends TwoFactorTokenCountArgs>(
      args?: Subset<T, TwoFactorTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TwoFactorTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TwoFactorToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TwoFactorTokenAggregateArgs>(args: Subset<T, TwoFactorTokenAggregateArgs>): Prisma.PrismaPromise<GetTwoFactorTokenAggregateType<T>>

    /**
     * Group by TwoFactorToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TwoFactorTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TwoFactorTokenGroupByArgs['orderBy'] }
        : { orderBy?: TwoFactorTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TwoFactorTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTwoFactorTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TwoFactorToken model
   */
  readonly fields: TwoFactorTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TwoFactorToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TwoFactorTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TwoFactorToken model
   */ 
  interface TwoFactorTokenFieldRefs {
    readonly id: FieldRef<"TwoFactorToken", 'String'>
    readonly email: FieldRef<"TwoFactorToken", 'String'>
    readonly token: FieldRef<"TwoFactorToken", 'String'>
    readonly expires: FieldRef<"TwoFactorToken", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * TwoFactorToken findUnique
   */
  export type TwoFactorTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorToken
     */
    select?: TwoFactorTokenSelect<ExtArgs> | null
    /**
     * Filter, which TwoFactorToken to fetch.
     */
    where: TwoFactorTokenWhereUniqueInput
  }


  /**
   * TwoFactorToken findUniqueOrThrow
   */
  export type TwoFactorTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorToken
     */
    select?: TwoFactorTokenSelect<ExtArgs> | null
    /**
     * Filter, which TwoFactorToken to fetch.
     */
    where: TwoFactorTokenWhereUniqueInput
  }


  /**
   * TwoFactorToken findFirst
   */
  export type TwoFactorTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorToken
     */
    select?: TwoFactorTokenSelect<ExtArgs> | null
    /**
     * Filter, which TwoFactorToken to fetch.
     */
    where?: TwoFactorTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactorTokens to fetch.
     */
    orderBy?: TwoFactorTokenOrderByWithRelationInput | TwoFactorTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwoFactorTokens.
     */
    cursor?: TwoFactorTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactorTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactorTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwoFactorTokens.
     */
    distinct?: TwoFactorTokenScalarFieldEnum | TwoFactorTokenScalarFieldEnum[]
  }


  /**
   * TwoFactorToken findFirstOrThrow
   */
  export type TwoFactorTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorToken
     */
    select?: TwoFactorTokenSelect<ExtArgs> | null
    /**
     * Filter, which TwoFactorToken to fetch.
     */
    where?: TwoFactorTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactorTokens to fetch.
     */
    orderBy?: TwoFactorTokenOrderByWithRelationInput | TwoFactorTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwoFactorTokens.
     */
    cursor?: TwoFactorTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactorTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactorTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwoFactorTokens.
     */
    distinct?: TwoFactorTokenScalarFieldEnum | TwoFactorTokenScalarFieldEnum[]
  }


  /**
   * TwoFactorToken findMany
   */
  export type TwoFactorTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorToken
     */
    select?: TwoFactorTokenSelect<ExtArgs> | null
    /**
     * Filter, which TwoFactorTokens to fetch.
     */
    where?: TwoFactorTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactorTokens to fetch.
     */
    orderBy?: TwoFactorTokenOrderByWithRelationInput | TwoFactorTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TwoFactorTokens.
     */
    cursor?: TwoFactorTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactorTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactorTokens.
     */
    skip?: number
    distinct?: TwoFactorTokenScalarFieldEnum | TwoFactorTokenScalarFieldEnum[]
  }


  /**
   * TwoFactorToken create
   */
  export type TwoFactorTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorToken
     */
    select?: TwoFactorTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a TwoFactorToken.
     */
    data: XOR<TwoFactorTokenCreateInput, TwoFactorTokenUncheckedCreateInput>
  }


  /**
   * TwoFactorToken createMany
   */
  export type TwoFactorTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TwoFactorTokens.
     */
    data: TwoFactorTokenCreateManyInput | TwoFactorTokenCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TwoFactorToken update
   */
  export type TwoFactorTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorToken
     */
    select?: TwoFactorTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a TwoFactorToken.
     */
    data: XOR<TwoFactorTokenUpdateInput, TwoFactorTokenUncheckedUpdateInput>
    /**
     * Choose, which TwoFactorToken to update.
     */
    where: TwoFactorTokenWhereUniqueInput
  }


  /**
   * TwoFactorToken updateMany
   */
  export type TwoFactorTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TwoFactorTokens.
     */
    data: XOR<TwoFactorTokenUpdateManyMutationInput, TwoFactorTokenUncheckedUpdateManyInput>
    /**
     * Filter which TwoFactorTokens to update
     */
    where?: TwoFactorTokenWhereInput
  }


  /**
   * TwoFactorToken upsert
   */
  export type TwoFactorTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorToken
     */
    select?: TwoFactorTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the TwoFactorToken to update in case it exists.
     */
    where: TwoFactorTokenWhereUniqueInput
    /**
     * In case the TwoFactorToken found by the `where` argument doesn't exist, create a new TwoFactorToken with this data.
     */
    create: XOR<TwoFactorTokenCreateInput, TwoFactorTokenUncheckedCreateInput>
    /**
     * In case the TwoFactorToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TwoFactorTokenUpdateInput, TwoFactorTokenUncheckedUpdateInput>
  }


  /**
   * TwoFactorToken delete
   */
  export type TwoFactorTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorToken
     */
    select?: TwoFactorTokenSelect<ExtArgs> | null
    /**
     * Filter which TwoFactorToken to delete.
     */
    where: TwoFactorTokenWhereUniqueInput
  }


  /**
   * TwoFactorToken deleteMany
   */
  export type TwoFactorTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TwoFactorTokens to delete
     */
    where?: TwoFactorTokenWhereInput
  }


  /**
   * TwoFactorToken without action
   */
  export type TwoFactorTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorToken
     */
    select?: TwoFactorTokenSelect<ExtArgs> | null
  }



  /**
   * Model TwoFactorConfirmation
   */

  export type AggregateTwoFactorConfirmation = {
    _count: TwoFactorConfirmationCountAggregateOutputType | null
    _min: TwoFactorConfirmationMinAggregateOutputType | null
    _max: TwoFactorConfirmationMaxAggregateOutputType | null
  }

  export type TwoFactorConfirmationMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type TwoFactorConfirmationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type TwoFactorConfirmationCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type TwoFactorConfirmationMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TwoFactorConfirmationMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TwoFactorConfirmationCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type TwoFactorConfirmationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TwoFactorConfirmation to aggregate.
     */
    where?: TwoFactorConfirmationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactorConfirmations to fetch.
     */
    orderBy?: TwoFactorConfirmationOrderByWithRelationInput | TwoFactorConfirmationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TwoFactorConfirmationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactorConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactorConfirmations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TwoFactorConfirmations
    **/
    _count?: true | TwoFactorConfirmationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TwoFactorConfirmationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TwoFactorConfirmationMaxAggregateInputType
  }

  export type GetTwoFactorConfirmationAggregateType<T extends TwoFactorConfirmationAggregateArgs> = {
        [P in keyof T & keyof AggregateTwoFactorConfirmation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTwoFactorConfirmation[P]>
      : GetScalarType<T[P], AggregateTwoFactorConfirmation[P]>
  }




  export type TwoFactorConfirmationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TwoFactorConfirmationWhereInput
    orderBy?: TwoFactorConfirmationOrderByWithAggregationInput | TwoFactorConfirmationOrderByWithAggregationInput[]
    by: TwoFactorConfirmationScalarFieldEnum[] | TwoFactorConfirmationScalarFieldEnum
    having?: TwoFactorConfirmationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TwoFactorConfirmationCountAggregateInputType | true
    _min?: TwoFactorConfirmationMinAggregateInputType
    _max?: TwoFactorConfirmationMaxAggregateInputType
  }

  export type TwoFactorConfirmationGroupByOutputType = {
    id: string
    userId: string
    _count: TwoFactorConfirmationCountAggregateOutputType | null
    _min: TwoFactorConfirmationMinAggregateOutputType | null
    _max: TwoFactorConfirmationMaxAggregateOutputType | null
  }

  type GetTwoFactorConfirmationGroupByPayload<T extends TwoFactorConfirmationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TwoFactorConfirmationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TwoFactorConfirmationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TwoFactorConfirmationGroupByOutputType[P]>
            : GetScalarType<T[P], TwoFactorConfirmationGroupByOutputType[P]>
        }
      >
    >


  export type TwoFactorConfirmationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["twoFactorConfirmation"]>

  export type TwoFactorConfirmationSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type TwoFactorConfirmationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $TwoFactorConfirmationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TwoFactorConfirmation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
    }, ExtArgs["result"]["twoFactorConfirmation"]>
    composites: {}
  }


  type TwoFactorConfirmationGetPayload<S extends boolean | null | undefined | TwoFactorConfirmationDefaultArgs> = $Result.GetResult<Prisma.$TwoFactorConfirmationPayload, S>

  type TwoFactorConfirmationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TwoFactorConfirmationFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TwoFactorConfirmationCountAggregateInputType | true
    }

  export interface TwoFactorConfirmationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TwoFactorConfirmation'], meta: { name: 'TwoFactorConfirmation' } }
    /**
     * Find zero or one TwoFactorConfirmation that matches the filter.
     * @param {TwoFactorConfirmationFindUniqueArgs} args - Arguments to find a TwoFactorConfirmation
     * @example
     * // Get one TwoFactorConfirmation
     * const twoFactorConfirmation = await prisma.twoFactorConfirmation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TwoFactorConfirmationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TwoFactorConfirmationFindUniqueArgs<ExtArgs>>
    ): Prisma__TwoFactorConfirmationClient<$Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TwoFactorConfirmation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TwoFactorConfirmationFindUniqueOrThrowArgs} args - Arguments to find a TwoFactorConfirmation
     * @example
     * // Get one TwoFactorConfirmation
     * const twoFactorConfirmation = await prisma.twoFactorConfirmation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TwoFactorConfirmationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TwoFactorConfirmationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TwoFactorConfirmationClient<$Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TwoFactorConfirmation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorConfirmationFindFirstArgs} args - Arguments to find a TwoFactorConfirmation
     * @example
     * // Get one TwoFactorConfirmation
     * const twoFactorConfirmation = await prisma.twoFactorConfirmation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TwoFactorConfirmationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TwoFactorConfirmationFindFirstArgs<ExtArgs>>
    ): Prisma__TwoFactorConfirmationClient<$Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TwoFactorConfirmation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorConfirmationFindFirstOrThrowArgs} args - Arguments to find a TwoFactorConfirmation
     * @example
     * // Get one TwoFactorConfirmation
     * const twoFactorConfirmation = await prisma.twoFactorConfirmation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TwoFactorConfirmationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TwoFactorConfirmationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TwoFactorConfirmationClient<$Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TwoFactorConfirmations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorConfirmationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TwoFactorConfirmations
     * const twoFactorConfirmations = await prisma.twoFactorConfirmation.findMany()
     * 
     * // Get first 10 TwoFactorConfirmations
     * const twoFactorConfirmations = await prisma.twoFactorConfirmation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const twoFactorConfirmationWithIdOnly = await prisma.twoFactorConfirmation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TwoFactorConfirmationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TwoFactorConfirmationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TwoFactorConfirmation.
     * @param {TwoFactorConfirmationCreateArgs} args - Arguments to create a TwoFactorConfirmation.
     * @example
     * // Create one TwoFactorConfirmation
     * const TwoFactorConfirmation = await prisma.twoFactorConfirmation.create({
     *   data: {
     *     // ... data to create a TwoFactorConfirmation
     *   }
     * })
     * 
    **/
    create<T extends TwoFactorConfirmationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TwoFactorConfirmationCreateArgs<ExtArgs>>
    ): Prisma__TwoFactorConfirmationClient<$Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TwoFactorConfirmations.
     *     @param {TwoFactorConfirmationCreateManyArgs} args - Arguments to create many TwoFactorConfirmations.
     *     @example
     *     // Create many TwoFactorConfirmations
     *     const twoFactorConfirmation = await prisma.twoFactorConfirmation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TwoFactorConfirmationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TwoFactorConfirmationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TwoFactorConfirmation.
     * @param {TwoFactorConfirmationDeleteArgs} args - Arguments to delete one TwoFactorConfirmation.
     * @example
     * // Delete one TwoFactorConfirmation
     * const TwoFactorConfirmation = await prisma.twoFactorConfirmation.delete({
     *   where: {
     *     // ... filter to delete one TwoFactorConfirmation
     *   }
     * })
     * 
    **/
    delete<T extends TwoFactorConfirmationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TwoFactorConfirmationDeleteArgs<ExtArgs>>
    ): Prisma__TwoFactorConfirmationClient<$Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TwoFactorConfirmation.
     * @param {TwoFactorConfirmationUpdateArgs} args - Arguments to update one TwoFactorConfirmation.
     * @example
     * // Update one TwoFactorConfirmation
     * const twoFactorConfirmation = await prisma.twoFactorConfirmation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TwoFactorConfirmationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TwoFactorConfirmationUpdateArgs<ExtArgs>>
    ): Prisma__TwoFactorConfirmationClient<$Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TwoFactorConfirmations.
     * @param {TwoFactorConfirmationDeleteManyArgs} args - Arguments to filter TwoFactorConfirmations to delete.
     * @example
     * // Delete a few TwoFactorConfirmations
     * const { count } = await prisma.twoFactorConfirmation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TwoFactorConfirmationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TwoFactorConfirmationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TwoFactorConfirmations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorConfirmationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TwoFactorConfirmations
     * const twoFactorConfirmation = await prisma.twoFactorConfirmation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TwoFactorConfirmationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TwoFactorConfirmationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TwoFactorConfirmation.
     * @param {TwoFactorConfirmationUpsertArgs} args - Arguments to update or create a TwoFactorConfirmation.
     * @example
     * // Update or create a TwoFactorConfirmation
     * const twoFactorConfirmation = await prisma.twoFactorConfirmation.upsert({
     *   create: {
     *     // ... data to create a TwoFactorConfirmation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TwoFactorConfirmation we want to update
     *   }
     * })
    **/
    upsert<T extends TwoFactorConfirmationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TwoFactorConfirmationUpsertArgs<ExtArgs>>
    ): Prisma__TwoFactorConfirmationClient<$Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TwoFactorConfirmations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorConfirmationCountArgs} args - Arguments to filter TwoFactorConfirmations to count.
     * @example
     * // Count the number of TwoFactorConfirmations
     * const count = await prisma.twoFactorConfirmation.count({
     *   where: {
     *     // ... the filter for the TwoFactorConfirmations we want to count
     *   }
     * })
    **/
    count<T extends TwoFactorConfirmationCountArgs>(
      args?: Subset<T, TwoFactorConfirmationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TwoFactorConfirmationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TwoFactorConfirmation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorConfirmationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TwoFactorConfirmationAggregateArgs>(args: Subset<T, TwoFactorConfirmationAggregateArgs>): Prisma.PrismaPromise<GetTwoFactorConfirmationAggregateType<T>>

    /**
     * Group by TwoFactorConfirmation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorConfirmationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TwoFactorConfirmationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TwoFactorConfirmationGroupByArgs['orderBy'] }
        : { orderBy?: TwoFactorConfirmationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TwoFactorConfirmationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTwoFactorConfirmationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TwoFactorConfirmation model
   */
  readonly fields: TwoFactorConfirmationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TwoFactorConfirmation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TwoFactorConfirmationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TwoFactorConfirmation model
   */ 
  interface TwoFactorConfirmationFieldRefs {
    readonly id: FieldRef<"TwoFactorConfirmation", 'String'>
    readonly userId: FieldRef<"TwoFactorConfirmation", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TwoFactorConfirmation findUnique
   */
  export type TwoFactorConfirmationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorConfirmation
     */
    select?: TwoFactorConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwoFactorConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactorConfirmation to fetch.
     */
    where: TwoFactorConfirmationWhereUniqueInput
  }


  /**
   * TwoFactorConfirmation findUniqueOrThrow
   */
  export type TwoFactorConfirmationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorConfirmation
     */
    select?: TwoFactorConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwoFactorConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactorConfirmation to fetch.
     */
    where: TwoFactorConfirmationWhereUniqueInput
  }


  /**
   * TwoFactorConfirmation findFirst
   */
  export type TwoFactorConfirmationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorConfirmation
     */
    select?: TwoFactorConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwoFactorConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactorConfirmation to fetch.
     */
    where?: TwoFactorConfirmationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactorConfirmations to fetch.
     */
    orderBy?: TwoFactorConfirmationOrderByWithRelationInput | TwoFactorConfirmationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwoFactorConfirmations.
     */
    cursor?: TwoFactorConfirmationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactorConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactorConfirmations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwoFactorConfirmations.
     */
    distinct?: TwoFactorConfirmationScalarFieldEnum | TwoFactorConfirmationScalarFieldEnum[]
  }


  /**
   * TwoFactorConfirmation findFirstOrThrow
   */
  export type TwoFactorConfirmationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorConfirmation
     */
    select?: TwoFactorConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwoFactorConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactorConfirmation to fetch.
     */
    where?: TwoFactorConfirmationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactorConfirmations to fetch.
     */
    orderBy?: TwoFactorConfirmationOrderByWithRelationInput | TwoFactorConfirmationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwoFactorConfirmations.
     */
    cursor?: TwoFactorConfirmationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactorConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactorConfirmations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwoFactorConfirmations.
     */
    distinct?: TwoFactorConfirmationScalarFieldEnum | TwoFactorConfirmationScalarFieldEnum[]
  }


  /**
   * TwoFactorConfirmation findMany
   */
  export type TwoFactorConfirmationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorConfirmation
     */
    select?: TwoFactorConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwoFactorConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactorConfirmations to fetch.
     */
    where?: TwoFactorConfirmationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactorConfirmations to fetch.
     */
    orderBy?: TwoFactorConfirmationOrderByWithRelationInput | TwoFactorConfirmationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TwoFactorConfirmations.
     */
    cursor?: TwoFactorConfirmationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactorConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactorConfirmations.
     */
    skip?: number
    distinct?: TwoFactorConfirmationScalarFieldEnum | TwoFactorConfirmationScalarFieldEnum[]
  }


  /**
   * TwoFactorConfirmation create
   */
  export type TwoFactorConfirmationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorConfirmation
     */
    select?: TwoFactorConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwoFactorConfirmationInclude<ExtArgs> | null
    /**
     * The data needed to create a TwoFactorConfirmation.
     */
    data: XOR<TwoFactorConfirmationCreateInput, TwoFactorConfirmationUncheckedCreateInput>
  }


  /**
   * TwoFactorConfirmation createMany
   */
  export type TwoFactorConfirmationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TwoFactorConfirmations.
     */
    data: TwoFactorConfirmationCreateManyInput | TwoFactorConfirmationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TwoFactorConfirmation update
   */
  export type TwoFactorConfirmationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorConfirmation
     */
    select?: TwoFactorConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwoFactorConfirmationInclude<ExtArgs> | null
    /**
     * The data needed to update a TwoFactorConfirmation.
     */
    data: XOR<TwoFactorConfirmationUpdateInput, TwoFactorConfirmationUncheckedUpdateInput>
    /**
     * Choose, which TwoFactorConfirmation to update.
     */
    where: TwoFactorConfirmationWhereUniqueInput
  }


  /**
   * TwoFactorConfirmation updateMany
   */
  export type TwoFactorConfirmationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TwoFactorConfirmations.
     */
    data: XOR<TwoFactorConfirmationUpdateManyMutationInput, TwoFactorConfirmationUncheckedUpdateManyInput>
    /**
     * Filter which TwoFactorConfirmations to update
     */
    where?: TwoFactorConfirmationWhereInput
  }


  /**
   * TwoFactorConfirmation upsert
   */
  export type TwoFactorConfirmationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorConfirmation
     */
    select?: TwoFactorConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwoFactorConfirmationInclude<ExtArgs> | null
    /**
     * The filter to search for the TwoFactorConfirmation to update in case it exists.
     */
    where: TwoFactorConfirmationWhereUniqueInput
    /**
     * In case the TwoFactorConfirmation found by the `where` argument doesn't exist, create a new TwoFactorConfirmation with this data.
     */
    create: XOR<TwoFactorConfirmationCreateInput, TwoFactorConfirmationUncheckedCreateInput>
    /**
     * In case the TwoFactorConfirmation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TwoFactorConfirmationUpdateInput, TwoFactorConfirmationUncheckedUpdateInput>
  }


  /**
   * TwoFactorConfirmation delete
   */
  export type TwoFactorConfirmationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorConfirmation
     */
    select?: TwoFactorConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwoFactorConfirmationInclude<ExtArgs> | null
    /**
     * Filter which TwoFactorConfirmation to delete.
     */
    where: TwoFactorConfirmationWhereUniqueInput
  }


  /**
   * TwoFactorConfirmation deleteMany
   */
  export type TwoFactorConfirmationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TwoFactorConfirmations to delete
     */
    where?: TwoFactorConfirmationWhereInput
  }


  /**
   * TwoFactorConfirmation without action
   */
  export type TwoFactorConfirmationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorConfirmation
     */
    select?: TwoFactorConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TwoFactorConfirmationInclude<ExtArgs> | null
  }



  /**
   * Model Collection
   */

  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null
    _avg: CollectionAvgAggregateOutputType | null
    _sum: CollectionSumAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  export type CollectionAvgAggregateOutputType = {
    id: number | null
  }

  export type CollectionSumAggregateOutputType = {
    id: number | null
  }

  export type CollectionMinAggregateOutputType = {
    id: number | null
    description: string | null
  }

  export type CollectionMaxAggregateOutputType = {
    id: number | null
    description: string | null
  }

  export type CollectionCountAggregateOutputType = {
    id: number
    description: number
    _all: number
  }


  export type CollectionAvgAggregateInputType = {
    id?: true
  }

  export type CollectionSumAggregateInputType = {
    id?: true
  }

  export type CollectionMinAggregateInputType = {
    id?: true
    description?: true
  }

  export type CollectionMaxAggregateInputType = {
    id?: true
    description?: true
  }

  export type CollectionCountAggregateInputType = {
    id?: true
    description?: true
    _all?: true
  }

  export type CollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collection to aggregate.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collections
    **/
    _count?: true | CollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionMaxAggregateInputType
  }

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>
  }




  export type CollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithAggregationInput | CollectionOrderByWithAggregationInput[]
    by: CollectionScalarFieldEnum[] | CollectionScalarFieldEnum
    having?: CollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionCountAggregateInputType | true
    _avg?: CollectionAvgAggregateInputType
    _sum?: CollectionSumAggregateInputType
    _min?: CollectionMinAggregateInputType
    _max?: CollectionMaxAggregateInputType
  }

  export type CollectionGroupByOutputType = {
    id: number
    description: string
    _count: CollectionCountAggregateOutputType | null
    _avg: CollectionAvgAggregateOutputType | null
    _sum: CollectionSumAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  type GetCollectionGroupByPayload<T extends CollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>
        }
      >
    >


  export type CollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    collections?: boolean | Collection$collectionsArgs<ExtArgs>
    items?: boolean | Collection$itemsArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectScalar = {
    id?: boolean
    description?: boolean
  }

  export type CollectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collections?: boolean | Collection$collectionsArgs<ExtArgs>
    items?: boolean | Collection$itemsArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collection"
    objects: {
      collections: Prisma.$UserCollectionPayload<ExtArgs>[]
      items: Prisma.$ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
    }, ExtArgs["result"]["collection"]>
    composites: {}
  }


  type CollectionGetPayload<S extends boolean | null | undefined | CollectionDefaultArgs> = $Result.GetResult<Prisma.$CollectionPayload, S>

  type CollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CollectionFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CollectionCountAggregateInputType | true
    }

  export interface CollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collection'], meta: { name: 'Collection' } }
    /**
     * Find zero or one Collection that matches the filter.
     * @param {CollectionFindUniqueArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CollectionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CollectionFindUniqueArgs<ExtArgs>>
    ): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Collection that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CollectionFindUniqueOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CollectionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CollectionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CollectionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CollectionFindFirstArgs<ExtArgs>>
    ): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Collection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CollectionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CollectionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     * 
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionWithIdOnly = await prisma.collection.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CollectionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CollectionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Collection.
     * @param {CollectionCreateArgs} args - Arguments to create a Collection.
     * @example
     * // Create one Collection
     * const Collection = await prisma.collection.create({
     *   data: {
     *     // ... data to create a Collection
     *   }
     * })
     * 
    **/
    create<T extends CollectionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CollectionCreateArgs<ExtArgs>>
    ): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Collections.
     *     @param {CollectionCreateManyArgs} args - Arguments to create many Collections.
     *     @example
     *     // Create many Collections
     *     const collection = await prisma.collection.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CollectionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CollectionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Collection.
     * @param {CollectionDeleteArgs} args - Arguments to delete one Collection.
     * @example
     * // Delete one Collection
     * const Collection = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one Collection
     *   }
     * })
     * 
    **/
    delete<T extends CollectionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CollectionDeleteArgs<ExtArgs>>
    ): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Collection.
     * @param {CollectionUpdateArgs} args - Arguments to update one Collection.
     * @example
     * // Update one Collection
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CollectionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CollectionUpdateArgs<ExtArgs>>
    ): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Collections.
     * @param {CollectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CollectionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CollectionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CollectionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CollectionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Collection.
     * @param {CollectionUpsertArgs} args - Arguments to update or create a Collection.
     * @example
     * // Update or create a Collection
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection we want to update
     *   }
     * })
    **/
    upsert<T extends CollectionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CollectionUpsertArgs<ExtArgs>>
    ): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
    **/
    count<T extends CollectionCountArgs>(
      args?: Subset<T, CollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollectionAggregateArgs>(args: Subset<T, CollectionAggregateArgs>): Prisma.PrismaPromise<GetCollectionAggregateType<T>>

    /**
     * Group by Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionGroupByArgs['orderBy'] }
        : { orderBy?: CollectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collection model
   */
  readonly fields: CollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    collections<T extends Collection$collectionsArgs<ExtArgs> = {}>(args?: Subset<T, Collection$collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCollectionPayload<ExtArgs>, T, 'findMany'> | Null>;

    items<T extends Collection$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Collection$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Collection model
   */ 
  interface CollectionFieldRefs {
    readonly id: FieldRef<"Collection", 'Int'>
    readonly description: FieldRef<"Collection", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Collection findUnique
   */
  export type CollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }


  /**
   * Collection findUniqueOrThrow
   */
  export type CollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }


  /**
   * Collection findFirst
   */
  export type CollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }


  /**
   * Collection findFirstOrThrow
   */
  export type CollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }


  /**
   * Collection findMany
   */
  export type CollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collections to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }


  /**
   * Collection create
   */
  export type CollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Collection.
     */
    data: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
  }


  /**
   * Collection createMany
   */
  export type CollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Collection update
   */
  export type CollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Collection.
     */
    data: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
    /**
     * Choose, which Collection to update.
     */
    where: CollectionWhereUniqueInput
  }


  /**
   * Collection updateMany
   */
  export type CollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collections.
     */
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput
  }


  /**
   * Collection upsert
   */
  export type CollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Collection to update in case it exists.
     */
    where: CollectionWhereUniqueInput
    /**
     * In case the Collection found by the `where` argument doesn't exist, create a new Collection with this data.
     */
    create: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
    /**
     * In case the Collection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
  }


  /**
   * Collection delete
   */
  export type CollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter which Collection to delete.
     */
    where: CollectionWhereUniqueInput
  }


  /**
   * Collection deleteMany
   */
  export type CollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collections to delete
     */
    where?: CollectionWhereInput
  }


  /**
   * Collection.collections
   */
  export type Collection$collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollection
     */
    select?: UserCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCollectionInclude<ExtArgs> | null
    where?: UserCollectionWhereInput
    orderBy?: UserCollectionOrderByWithRelationInput | UserCollectionOrderByWithRelationInput[]
    cursor?: UserCollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCollectionScalarFieldEnum | UserCollectionScalarFieldEnum[]
  }


  /**
   * Collection.items
   */
  export type Collection$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }


  /**
   * Collection without action
   */
  export type CollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude<ExtArgs> | null
  }



  /**
   * Model TypeModel
   */

  export type AggregateTypeModel = {
    _count: TypeModelCountAggregateOutputType | null
    _avg: TypeModelAvgAggregateOutputType | null
    _sum: TypeModelSumAggregateOutputType | null
    _min: TypeModelMinAggregateOutputType | null
    _max: TypeModelMaxAggregateOutputType | null
  }

  export type TypeModelAvgAggregateOutputType = {
    id: number | null
  }

  export type TypeModelSumAggregateOutputType = {
    id: number | null
  }

  export type TypeModelMinAggregateOutputType = {
    id: number | null
    description: string | null
  }

  export type TypeModelMaxAggregateOutputType = {
    id: number | null
    description: string | null
  }

  export type TypeModelCountAggregateOutputType = {
    id: number
    description: number
    _all: number
  }


  export type TypeModelAvgAggregateInputType = {
    id?: true
  }

  export type TypeModelSumAggregateInputType = {
    id?: true
  }

  export type TypeModelMinAggregateInputType = {
    id?: true
    description?: true
  }

  export type TypeModelMaxAggregateInputType = {
    id?: true
    description?: true
  }

  export type TypeModelCountAggregateInputType = {
    id?: true
    description?: true
    _all?: true
  }

  export type TypeModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TypeModel to aggregate.
     */
    where?: TypeModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeModels to fetch.
     */
    orderBy?: TypeModelOrderByWithRelationInput | TypeModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypeModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TypeModels
    **/
    _count?: true | TypeModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TypeModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TypeModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeModelMaxAggregateInputType
  }

  export type GetTypeModelAggregateType<T extends TypeModelAggregateArgs> = {
        [P in keyof T & keyof AggregateTypeModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTypeModel[P]>
      : GetScalarType<T[P], AggregateTypeModel[P]>
  }




  export type TypeModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeModelWhereInput
    orderBy?: TypeModelOrderByWithAggregationInput | TypeModelOrderByWithAggregationInput[]
    by: TypeModelScalarFieldEnum[] | TypeModelScalarFieldEnum
    having?: TypeModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeModelCountAggregateInputType | true
    _avg?: TypeModelAvgAggregateInputType
    _sum?: TypeModelSumAggregateInputType
    _min?: TypeModelMinAggregateInputType
    _max?: TypeModelMaxAggregateInputType
  }

  export type TypeModelGroupByOutputType = {
    id: number
    description: string
    _count: TypeModelCountAggregateOutputType | null
    _avg: TypeModelAvgAggregateOutputType | null
    _sum: TypeModelSumAggregateOutputType | null
    _min: TypeModelMinAggregateOutputType | null
    _max: TypeModelMaxAggregateOutputType | null
  }

  type GetTypeModelGroupByPayload<T extends TypeModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypeModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeModelGroupByOutputType[P]>
            : GetScalarType<T[P], TypeModelGroupByOutputType[P]>
        }
      >
    >


  export type TypeModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    items?: boolean | TypeModel$itemsArgs<ExtArgs>
    _count?: boolean | TypeModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["typeModel"]>

  export type TypeModelSelectScalar = {
    id?: boolean
    description?: boolean
  }

  export type TypeModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | TypeModel$itemsArgs<ExtArgs>
    _count?: boolean | TypeModelCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TypeModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TypeModel"
    objects: {
      items: Prisma.$ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
    }, ExtArgs["result"]["typeModel"]>
    composites: {}
  }


  type TypeModelGetPayload<S extends boolean | null | undefined | TypeModelDefaultArgs> = $Result.GetResult<Prisma.$TypeModelPayload, S>

  type TypeModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TypeModelFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TypeModelCountAggregateInputType | true
    }

  export interface TypeModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TypeModel'], meta: { name: 'TypeModel' } }
    /**
     * Find zero or one TypeModel that matches the filter.
     * @param {TypeModelFindUniqueArgs} args - Arguments to find a TypeModel
     * @example
     * // Get one TypeModel
     * const typeModel = await prisma.typeModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TypeModelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TypeModelFindUniqueArgs<ExtArgs>>
    ): Prisma__TypeModelClient<$Result.GetResult<Prisma.$TypeModelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TypeModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TypeModelFindUniqueOrThrowArgs} args - Arguments to find a TypeModel
     * @example
     * // Get one TypeModel
     * const typeModel = await prisma.typeModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TypeModelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeModelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TypeModelClient<$Result.GetResult<Prisma.$TypeModelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TypeModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeModelFindFirstArgs} args - Arguments to find a TypeModel
     * @example
     * // Get one TypeModel
     * const typeModel = await prisma.typeModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TypeModelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeModelFindFirstArgs<ExtArgs>>
    ): Prisma__TypeModelClient<$Result.GetResult<Prisma.$TypeModelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TypeModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeModelFindFirstOrThrowArgs} args - Arguments to find a TypeModel
     * @example
     * // Get one TypeModel
     * const typeModel = await prisma.typeModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TypeModelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeModelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TypeModelClient<$Result.GetResult<Prisma.$TypeModelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TypeModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TypeModels
     * const typeModels = await prisma.typeModel.findMany()
     * 
     * // Get first 10 TypeModels
     * const typeModels = await prisma.typeModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typeModelWithIdOnly = await prisma.typeModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TypeModelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeModelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeModelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TypeModel.
     * @param {TypeModelCreateArgs} args - Arguments to create a TypeModel.
     * @example
     * // Create one TypeModel
     * const TypeModel = await prisma.typeModel.create({
     *   data: {
     *     // ... data to create a TypeModel
     *   }
     * })
     * 
    **/
    create<T extends TypeModelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TypeModelCreateArgs<ExtArgs>>
    ): Prisma__TypeModelClient<$Result.GetResult<Prisma.$TypeModelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TypeModels.
     *     @param {TypeModelCreateManyArgs} args - Arguments to create many TypeModels.
     *     @example
     *     // Create many TypeModels
     *     const typeModel = await prisma.typeModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TypeModelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeModelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TypeModel.
     * @param {TypeModelDeleteArgs} args - Arguments to delete one TypeModel.
     * @example
     * // Delete one TypeModel
     * const TypeModel = await prisma.typeModel.delete({
     *   where: {
     *     // ... filter to delete one TypeModel
     *   }
     * })
     * 
    **/
    delete<T extends TypeModelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TypeModelDeleteArgs<ExtArgs>>
    ): Prisma__TypeModelClient<$Result.GetResult<Prisma.$TypeModelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TypeModel.
     * @param {TypeModelUpdateArgs} args - Arguments to update one TypeModel.
     * @example
     * // Update one TypeModel
     * const typeModel = await prisma.typeModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TypeModelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TypeModelUpdateArgs<ExtArgs>>
    ): Prisma__TypeModelClient<$Result.GetResult<Prisma.$TypeModelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TypeModels.
     * @param {TypeModelDeleteManyArgs} args - Arguments to filter TypeModels to delete.
     * @example
     * // Delete a few TypeModels
     * const { count } = await prisma.typeModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TypeModelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeModelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TypeModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TypeModels
     * const typeModel = await prisma.typeModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TypeModelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TypeModelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TypeModel.
     * @param {TypeModelUpsertArgs} args - Arguments to update or create a TypeModel.
     * @example
     * // Update or create a TypeModel
     * const typeModel = await prisma.typeModel.upsert({
     *   create: {
     *     // ... data to create a TypeModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TypeModel we want to update
     *   }
     * })
    **/
    upsert<T extends TypeModelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TypeModelUpsertArgs<ExtArgs>>
    ): Prisma__TypeModelClient<$Result.GetResult<Prisma.$TypeModelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TypeModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeModelCountArgs} args - Arguments to filter TypeModels to count.
     * @example
     * // Count the number of TypeModels
     * const count = await prisma.typeModel.count({
     *   where: {
     *     // ... the filter for the TypeModels we want to count
     *   }
     * })
    **/
    count<T extends TypeModelCountArgs>(
      args?: Subset<T, TypeModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TypeModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TypeModelAggregateArgs>(args: Subset<T, TypeModelAggregateArgs>): Prisma.PrismaPromise<GetTypeModelAggregateType<T>>

    /**
     * Group by TypeModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TypeModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeModelGroupByArgs['orderBy'] }
        : { orderBy?: TypeModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TypeModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TypeModel model
   */
  readonly fields: TypeModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TypeModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypeModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    items<T extends TypeModel$itemsArgs<ExtArgs> = {}>(args?: Subset<T, TypeModel$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TypeModel model
   */ 
  interface TypeModelFieldRefs {
    readonly id: FieldRef<"TypeModel", 'Int'>
    readonly description: FieldRef<"TypeModel", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TypeModel findUnique
   */
  export type TypeModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeModel
     */
    select?: TypeModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeModelInclude<ExtArgs> | null
    /**
     * Filter, which TypeModel to fetch.
     */
    where: TypeModelWhereUniqueInput
  }


  /**
   * TypeModel findUniqueOrThrow
   */
  export type TypeModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeModel
     */
    select?: TypeModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeModelInclude<ExtArgs> | null
    /**
     * Filter, which TypeModel to fetch.
     */
    where: TypeModelWhereUniqueInput
  }


  /**
   * TypeModel findFirst
   */
  export type TypeModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeModel
     */
    select?: TypeModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeModelInclude<ExtArgs> | null
    /**
     * Filter, which TypeModel to fetch.
     */
    where?: TypeModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeModels to fetch.
     */
    orderBy?: TypeModelOrderByWithRelationInput | TypeModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TypeModels.
     */
    cursor?: TypeModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TypeModels.
     */
    distinct?: TypeModelScalarFieldEnum | TypeModelScalarFieldEnum[]
  }


  /**
   * TypeModel findFirstOrThrow
   */
  export type TypeModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeModel
     */
    select?: TypeModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeModelInclude<ExtArgs> | null
    /**
     * Filter, which TypeModel to fetch.
     */
    where?: TypeModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeModels to fetch.
     */
    orderBy?: TypeModelOrderByWithRelationInput | TypeModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TypeModels.
     */
    cursor?: TypeModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TypeModels.
     */
    distinct?: TypeModelScalarFieldEnum | TypeModelScalarFieldEnum[]
  }


  /**
   * TypeModel findMany
   */
  export type TypeModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeModel
     */
    select?: TypeModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeModelInclude<ExtArgs> | null
    /**
     * Filter, which TypeModels to fetch.
     */
    where?: TypeModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeModels to fetch.
     */
    orderBy?: TypeModelOrderByWithRelationInput | TypeModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TypeModels.
     */
    cursor?: TypeModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeModels.
     */
    skip?: number
    distinct?: TypeModelScalarFieldEnum | TypeModelScalarFieldEnum[]
  }


  /**
   * TypeModel create
   */
  export type TypeModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeModel
     */
    select?: TypeModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeModelInclude<ExtArgs> | null
    /**
     * The data needed to create a TypeModel.
     */
    data: XOR<TypeModelCreateInput, TypeModelUncheckedCreateInput>
  }


  /**
   * TypeModel createMany
   */
  export type TypeModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TypeModels.
     */
    data: TypeModelCreateManyInput | TypeModelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TypeModel update
   */
  export type TypeModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeModel
     */
    select?: TypeModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeModelInclude<ExtArgs> | null
    /**
     * The data needed to update a TypeModel.
     */
    data: XOR<TypeModelUpdateInput, TypeModelUncheckedUpdateInput>
    /**
     * Choose, which TypeModel to update.
     */
    where: TypeModelWhereUniqueInput
  }


  /**
   * TypeModel updateMany
   */
  export type TypeModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TypeModels.
     */
    data: XOR<TypeModelUpdateManyMutationInput, TypeModelUncheckedUpdateManyInput>
    /**
     * Filter which TypeModels to update
     */
    where?: TypeModelWhereInput
  }


  /**
   * TypeModel upsert
   */
  export type TypeModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeModel
     */
    select?: TypeModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeModelInclude<ExtArgs> | null
    /**
     * The filter to search for the TypeModel to update in case it exists.
     */
    where: TypeModelWhereUniqueInput
    /**
     * In case the TypeModel found by the `where` argument doesn't exist, create a new TypeModel with this data.
     */
    create: XOR<TypeModelCreateInput, TypeModelUncheckedCreateInput>
    /**
     * In case the TypeModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypeModelUpdateInput, TypeModelUncheckedUpdateInput>
  }


  /**
   * TypeModel delete
   */
  export type TypeModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeModel
     */
    select?: TypeModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeModelInclude<ExtArgs> | null
    /**
     * Filter which TypeModel to delete.
     */
    where: TypeModelWhereUniqueInput
  }


  /**
   * TypeModel deleteMany
   */
  export type TypeModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TypeModels to delete
     */
    where?: TypeModelWhereInput
  }


  /**
   * TypeModel.items
   */
  export type TypeModel$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }


  /**
   * TypeModel without action
   */
  export type TypeModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeModel
     */
    select?: TypeModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeModelInclude<ExtArgs> | null
  }



  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    typeModelId: number | null
    collectionId: number | null
  }

  export type ItemSumAggregateOutputType = {
    typeModelId: number | null
    collectionId: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: string | null
    model: string | null
    series: string | null
    seriesNum: string | null
    year: string | null
    status: boolean | null
    image: string | null
    createdAt: Date | null
    userId: string | null
    typeModelId: number | null
    collectionId: number | null
  }

  export type ItemMaxAggregateOutputType = {
    id: string | null
    model: string | null
    series: string | null
    seriesNum: string | null
    year: string | null
    status: boolean | null
    image: string | null
    createdAt: Date | null
    userId: string | null
    typeModelId: number | null
    collectionId: number | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    model: number
    series: number
    seriesNum: number
    year: number
    status: number
    image: number
    createdAt: number
    userId: number
    typeModelId: number
    collectionId: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    typeModelId?: true
    collectionId?: true
  }

  export type ItemSumAggregateInputType = {
    typeModelId?: true
    collectionId?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    model?: true
    series?: true
    seriesNum?: true
    year?: true
    status?: true
    image?: true
    createdAt?: true
    userId?: true
    typeModelId?: true
    collectionId?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    model?: true
    series?: true
    seriesNum?: true
    year?: true
    status?: true
    image?: true
    createdAt?: true
    userId?: true
    typeModelId?: true
    collectionId?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    model?: true
    series?: true
    seriesNum?: true
    year?: true
    status?: true
    image?: true
    createdAt?: true
    userId?: true
    typeModelId?: true
    collectionId?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: string
    model: string
    series: string | null
    seriesNum: string | null
    year: string
    status: boolean
    image: string | null
    createdAt: Date
    userId: string | null
    typeModelId: number
    collectionId: number | null
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    series?: boolean
    seriesNum?: boolean
    year?: boolean
    status?: boolean
    image?: boolean
    createdAt?: boolean
    userId?: boolean
    typeModelId?: boolean
    collectionId?: boolean
    collection?: boolean | Item$collectionArgs<ExtArgs>
    typeModel?: boolean | TypeModelDefaultArgs<ExtArgs>
    user?: boolean | Item$userArgs<ExtArgs>
    itemImages?: boolean | Item$itemImagesArgs<ExtArgs>
    userItem?: boolean | Item$userItemArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    model?: boolean
    series?: boolean
    seriesNum?: boolean
    year?: boolean
    status?: boolean
    image?: boolean
    createdAt?: boolean
    userId?: boolean
    typeModelId?: boolean
    collectionId?: boolean
  }

  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | Item$collectionArgs<ExtArgs>
    typeModel?: boolean | TypeModelDefaultArgs<ExtArgs>
    user?: boolean | Item$userArgs<ExtArgs>
    itemImages?: boolean | Item$itemImagesArgs<ExtArgs>
    userItem?: boolean | Item$userItemArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      collection: Prisma.$CollectionPayload<ExtArgs> | null
      typeModel: Prisma.$TypeModelPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      itemImages: Prisma.$ItemImagePayload<ExtArgs>[]
      userItem: Prisma.$UserItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      model: string
      series: string | null
      seriesNum: string | null
      year: string
      status: boolean
      image: string | null
      createdAt: Date
      userId: string | null
      typeModelId: number
      collectionId: number | null
    }, ExtArgs["result"]["item"]>
    composites: {}
  }


  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Item that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
    **/
    create<T extends ItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemCreateArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Items.
     *     @param {ItemCreateManyArgs} args - Arguments to create many Items.
     *     @example
     *     // Create many Items
     *     const item = await prisma.item.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
    **/
    delete<T extends ItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
    **/
    upsert<T extends ItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    collection<T extends Item$collectionArgs<ExtArgs> = {}>(args?: Subset<T, Item$collectionArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    typeModel<T extends TypeModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TypeModelDefaultArgs<ExtArgs>>): Prisma__TypeModelClient<$Result.GetResult<Prisma.$TypeModelPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends Item$userArgs<ExtArgs> = {}>(args?: Subset<T, Item$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    itemImages<T extends Item$itemImagesArgs<ExtArgs> = {}>(args?: Subset<T, Item$itemImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, 'findMany'> | Null>;

    userItem<T extends Item$userItemArgs<ExtArgs> = {}>(args?: Subset<T, Item$userItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Item model
   */ 
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'String'>
    readonly model: FieldRef<"Item", 'String'>
    readonly series: FieldRef<"Item", 'String'>
    readonly seriesNum: FieldRef<"Item", 'String'>
    readonly year: FieldRef<"Item", 'String'>
    readonly status: FieldRef<"Item", 'Boolean'>
    readonly image: FieldRef<"Item", 'String'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
    readonly userId: FieldRef<"Item", 'String'>
    readonly typeModelId: FieldRef<"Item", 'Int'>
    readonly collectionId: FieldRef<"Item", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }


  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }


  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }


  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }


  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }


  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }


  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }


  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
  }


  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }


  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }


  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
  }


  /**
   * Item.collection
   */
  export type Item$collectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude<ExtArgs> | null
    where?: CollectionWhereInput
  }


  /**
   * Item.user
   */
  export type Item$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Item.itemImages
   */
  export type Item$itemImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemImageInclude<ExtArgs> | null
    where?: ItemImageWhereInput
    orderBy?: ItemImageOrderByWithRelationInput | ItemImageOrderByWithRelationInput[]
    cursor?: ItemImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemImageScalarFieldEnum | ItemImageScalarFieldEnum[]
  }


  /**
   * Item.userItem
   */
  export type Item$userItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserItemInclude<ExtArgs> | null
    where?: UserItemWhereInput
    orderBy?: UserItemOrderByWithRelationInput | UserItemOrderByWithRelationInput[]
    cursor?: UserItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserItemScalarFieldEnum | UserItemScalarFieldEnum[]
  }


  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
  }



  /**
   * Model ItemImage
   */

  export type AggregateItemImage = {
    _count: ItemImageCountAggregateOutputType | null
    _min: ItemImageMinAggregateOutputType | null
    _max: ItemImageMaxAggregateOutputType | null
  }

  export type ItemImageMinAggregateOutputType = {
    id: string | null
    itemId: string | null
    fileName: string | null
    link: string | null
    principal: boolean | null
    createdAt: Date | null
    status: boolean | null
  }

  export type ItemImageMaxAggregateOutputType = {
    id: string | null
    itemId: string | null
    fileName: string | null
    link: string | null
    principal: boolean | null
    createdAt: Date | null
    status: boolean | null
  }

  export type ItemImageCountAggregateOutputType = {
    id: number
    itemId: number
    fileName: number
    link: number
    principal: number
    createdAt: number
    status: number
    _all: number
  }


  export type ItemImageMinAggregateInputType = {
    id?: true
    itemId?: true
    fileName?: true
    link?: true
    principal?: true
    createdAt?: true
    status?: true
  }

  export type ItemImageMaxAggregateInputType = {
    id?: true
    itemId?: true
    fileName?: true
    link?: true
    principal?: true
    createdAt?: true
    status?: true
  }

  export type ItemImageCountAggregateInputType = {
    id?: true
    itemId?: true
    fileName?: true
    link?: true
    principal?: true
    createdAt?: true
    status?: true
    _all?: true
  }

  export type ItemImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemImage to aggregate.
     */
    where?: ItemImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemImages to fetch.
     */
    orderBy?: ItemImageOrderByWithRelationInput | ItemImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemImages
    **/
    _count?: true | ItemImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemImageMaxAggregateInputType
  }

  export type GetItemImageAggregateType<T extends ItemImageAggregateArgs> = {
        [P in keyof T & keyof AggregateItemImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemImage[P]>
      : GetScalarType<T[P], AggregateItemImage[P]>
  }




  export type ItemImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemImageWhereInput
    orderBy?: ItemImageOrderByWithAggregationInput | ItemImageOrderByWithAggregationInput[]
    by: ItemImageScalarFieldEnum[] | ItemImageScalarFieldEnum
    having?: ItemImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemImageCountAggregateInputType | true
    _min?: ItemImageMinAggregateInputType
    _max?: ItemImageMaxAggregateInputType
  }

  export type ItemImageGroupByOutputType = {
    id: string
    itemId: string
    fileName: string
    link: string
    principal: boolean
    createdAt: Date
    status: boolean
    _count: ItemImageCountAggregateOutputType | null
    _min: ItemImageMinAggregateOutputType | null
    _max: ItemImageMaxAggregateOutputType | null
  }

  type GetItemImageGroupByPayload<T extends ItemImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemImageGroupByOutputType[P]>
            : GetScalarType<T[P], ItemImageGroupByOutputType[P]>
        }
      >
    >


  export type ItemImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    fileName?: boolean
    link?: boolean
    principal?: boolean
    createdAt?: boolean
    status?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemImage"]>

  export type ItemImageSelectScalar = {
    id?: boolean
    itemId?: boolean
    fileName?: boolean
    link?: boolean
    principal?: boolean
    createdAt?: boolean
    status?: boolean
  }

  export type ItemImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }


  export type $ItemImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemImage"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      itemId: string
      fileName: string
      link: string
      principal: boolean
      createdAt: Date
      status: boolean
    }, ExtArgs["result"]["itemImage"]>
    composites: {}
  }


  type ItemImageGetPayload<S extends boolean | null | undefined | ItemImageDefaultArgs> = $Result.GetResult<Prisma.$ItemImagePayload, S>

  type ItemImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemImageFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ItemImageCountAggregateInputType | true
    }

  export interface ItemImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemImage'], meta: { name: 'ItemImage' } }
    /**
     * Find zero or one ItemImage that matches the filter.
     * @param {ItemImageFindUniqueArgs} args - Arguments to find a ItemImage
     * @example
     * // Get one ItemImage
     * const itemImage = await prisma.itemImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ItemImageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ItemImageFindUniqueArgs<ExtArgs>>
    ): Prisma__ItemImageClient<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ItemImage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ItemImageFindUniqueOrThrowArgs} args - Arguments to find a ItemImage
     * @example
     * // Get one ItemImage
     * const itemImage = await prisma.itemImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ItemImageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemImageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ItemImageClient<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ItemImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemImageFindFirstArgs} args - Arguments to find a ItemImage
     * @example
     * // Get one ItemImage
     * const itemImage = await prisma.itemImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ItemImageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemImageFindFirstArgs<ExtArgs>>
    ): Prisma__ItemImageClient<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ItemImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemImageFindFirstOrThrowArgs} args - Arguments to find a ItemImage
     * @example
     * // Get one ItemImage
     * const itemImage = await prisma.itemImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ItemImageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemImageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ItemImageClient<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ItemImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemImages
     * const itemImages = await prisma.itemImage.findMany()
     * 
     * // Get first 10 ItemImages
     * const itemImages = await prisma.itemImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemImageWithIdOnly = await prisma.itemImage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ItemImageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemImageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ItemImage.
     * @param {ItemImageCreateArgs} args - Arguments to create a ItemImage.
     * @example
     * // Create one ItemImage
     * const ItemImage = await prisma.itemImage.create({
     *   data: {
     *     // ... data to create a ItemImage
     *   }
     * })
     * 
    **/
    create<T extends ItemImageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemImageCreateArgs<ExtArgs>>
    ): Prisma__ItemImageClient<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ItemImages.
     *     @param {ItemImageCreateManyArgs} args - Arguments to create many ItemImages.
     *     @example
     *     // Create many ItemImages
     *     const itemImage = await prisma.itemImage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ItemImageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemImageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ItemImage.
     * @param {ItemImageDeleteArgs} args - Arguments to delete one ItemImage.
     * @example
     * // Delete one ItemImage
     * const ItemImage = await prisma.itemImage.delete({
     *   where: {
     *     // ... filter to delete one ItemImage
     *   }
     * })
     * 
    **/
    delete<T extends ItemImageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ItemImageDeleteArgs<ExtArgs>>
    ): Prisma__ItemImageClient<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ItemImage.
     * @param {ItemImageUpdateArgs} args - Arguments to update one ItemImage.
     * @example
     * // Update one ItemImage
     * const itemImage = await prisma.itemImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ItemImageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemImageUpdateArgs<ExtArgs>>
    ): Prisma__ItemImageClient<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ItemImages.
     * @param {ItemImageDeleteManyArgs} args - Arguments to filter ItemImages to delete.
     * @example
     * // Delete a few ItemImages
     * const { count } = await prisma.itemImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ItemImageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemImageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemImages
     * const itemImage = await prisma.itemImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ItemImageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ItemImageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemImage.
     * @param {ItemImageUpsertArgs} args - Arguments to update or create a ItemImage.
     * @example
     * // Update or create a ItemImage
     * const itemImage = await prisma.itemImage.upsert({
     *   create: {
     *     // ... data to create a ItemImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemImage we want to update
     *   }
     * })
    **/
    upsert<T extends ItemImageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ItemImageUpsertArgs<ExtArgs>>
    ): Prisma__ItemImageClient<$Result.GetResult<Prisma.$ItemImagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ItemImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemImageCountArgs} args - Arguments to filter ItemImages to count.
     * @example
     * // Count the number of ItemImages
     * const count = await prisma.itemImage.count({
     *   where: {
     *     // ... the filter for the ItemImages we want to count
     *   }
     * })
    **/
    count<T extends ItemImageCountArgs>(
      args?: Subset<T, ItemImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemImageAggregateArgs>(args: Subset<T, ItemImageAggregateArgs>): Prisma.PrismaPromise<GetItemImageAggregateType<T>>

    /**
     * Group by ItemImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemImageGroupByArgs['orderBy'] }
        : { orderBy?: ItemImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemImage model
   */
  readonly fields: ItemImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ItemImage model
   */ 
  interface ItemImageFieldRefs {
    readonly id: FieldRef<"ItemImage", 'String'>
    readonly itemId: FieldRef<"ItemImage", 'String'>
    readonly fileName: FieldRef<"ItemImage", 'String'>
    readonly link: FieldRef<"ItemImage", 'String'>
    readonly principal: FieldRef<"ItemImage", 'Boolean'>
    readonly createdAt: FieldRef<"ItemImage", 'DateTime'>
    readonly status: FieldRef<"ItemImage", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * ItemImage findUnique
   */
  export type ItemImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * Filter, which ItemImage to fetch.
     */
    where: ItemImageWhereUniqueInput
  }


  /**
   * ItemImage findUniqueOrThrow
   */
  export type ItemImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * Filter, which ItemImage to fetch.
     */
    where: ItemImageWhereUniqueInput
  }


  /**
   * ItemImage findFirst
   */
  export type ItemImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * Filter, which ItemImage to fetch.
     */
    where?: ItemImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemImages to fetch.
     */
    orderBy?: ItemImageOrderByWithRelationInput | ItemImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemImages.
     */
    cursor?: ItemImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemImages.
     */
    distinct?: ItemImageScalarFieldEnum | ItemImageScalarFieldEnum[]
  }


  /**
   * ItemImage findFirstOrThrow
   */
  export type ItemImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * Filter, which ItemImage to fetch.
     */
    where?: ItemImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemImages to fetch.
     */
    orderBy?: ItemImageOrderByWithRelationInput | ItemImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemImages.
     */
    cursor?: ItemImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemImages.
     */
    distinct?: ItemImageScalarFieldEnum | ItemImageScalarFieldEnum[]
  }


  /**
   * ItemImage findMany
   */
  export type ItemImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * Filter, which ItemImages to fetch.
     */
    where?: ItemImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemImages to fetch.
     */
    orderBy?: ItemImageOrderByWithRelationInput | ItemImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemImages.
     */
    cursor?: ItemImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemImages.
     */
    skip?: number
    distinct?: ItemImageScalarFieldEnum | ItemImageScalarFieldEnum[]
  }


  /**
   * ItemImage create
   */
  export type ItemImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemImage.
     */
    data: XOR<ItemImageCreateInput, ItemImageUncheckedCreateInput>
  }


  /**
   * ItemImage createMany
   */
  export type ItemImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemImages.
     */
    data: ItemImageCreateManyInput | ItemImageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ItemImage update
   */
  export type ItemImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemImage.
     */
    data: XOR<ItemImageUpdateInput, ItemImageUncheckedUpdateInput>
    /**
     * Choose, which ItemImage to update.
     */
    where: ItemImageWhereUniqueInput
  }


  /**
   * ItemImage updateMany
   */
  export type ItemImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemImages.
     */
    data: XOR<ItemImageUpdateManyMutationInput, ItemImageUncheckedUpdateManyInput>
    /**
     * Filter which ItemImages to update
     */
    where?: ItemImageWhereInput
  }


  /**
   * ItemImage upsert
   */
  export type ItemImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemImage to update in case it exists.
     */
    where: ItemImageWhereUniqueInput
    /**
     * In case the ItemImage found by the `where` argument doesn't exist, create a new ItemImage with this data.
     */
    create: XOR<ItemImageCreateInput, ItemImageUncheckedCreateInput>
    /**
     * In case the ItemImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemImageUpdateInput, ItemImageUncheckedUpdateInput>
  }


  /**
   * ItemImage delete
   */
  export type ItemImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemImageInclude<ExtArgs> | null
    /**
     * Filter which ItemImage to delete.
     */
    where: ItemImageWhereUniqueInput
  }


  /**
   * ItemImage deleteMany
   */
  export type ItemImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemImages to delete
     */
    where?: ItemImageWhereInput
  }


  /**
   * ItemImage without action
   */
  export type ItemImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemImage
     */
    select?: ItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemImageInclude<ExtArgs> | null
  }



  /**
   * Model UserCollection
   */

  export type AggregateUserCollection = {
    _count: UserCollectionCountAggregateOutputType | null
    _avg: UserCollectionAvgAggregateOutputType | null
    _sum: UserCollectionSumAggregateOutputType | null
    _min: UserCollectionMinAggregateOutputType | null
    _max: UserCollectionMaxAggregateOutputType | null
  }

  export type UserCollectionAvgAggregateOutputType = {
    collectionId: number | null
  }

  export type UserCollectionSumAggregateOutputType = {
    collectionId: number | null
  }

  export type UserCollectionMinAggregateOutputType = {
    id: string | null
    description: string | null
    name: string | null
    userId: string | null
    collectionId: number | null
    createdAt: Date | null
    status: boolean | null
    fatherId: string | null
  }

  export type UserCollectionMaxAggregateOutputType = {
    id: string | null
    description: string | null
    name: string | null
    userId: string | null
    collectionId: number | null
    createdAt: Date | null
    status: boolean | null
    fatherId: string | null
  }

  export type UserCollectionCountAggregateOutputType = {
    id: number
    description: number
    name: number
    userId: number
    collectionId: number
    createdAt: number
    status: number
    fatherId: number
    _all: number
  }


  export type UserCollectionAvgAggregateInputType = {
    collectionId?: true
  }

  export type UserCollectionSumAggregateInputType = {
    collectionId?: true
  }

  export type UserCollectionMinAggregateInputType = {
    id?: true
    description?: true
    name?: true
    userId?: true
    collectionId?: true
    createdAt?: true
    status?: true
    fatherId?: true
  }

  export type UserCollectionMaxAggregateInputType = {
    id?: true
    description?: true
    name?: true
    userId?: true
    collectionId?: true
    createdAt?: true
    status?: true
    fatherId?: true
  }

  export type UserCollectionCountAggregateInputType = {
    id?: true
    description?: true
    name?: true
    userId?: true
    collectionId?: true
    createdAt?: true
    status?: true
    fatherId?: true
    _all?: true
  }

  export type UserCollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCollection to aggregate.
     */
    where?: UserCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCollections to fetch.
     */
    orderBy?: UserCollectionOrderByWithRelationInput | UserCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCollections
    **/
    _count?: true | UserCollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCollectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCollectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCollectionMaxAggregateInputType
  }

  export type GetUserCollectionAggregateType<T extends UserCollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCollection[P]>
      : GetScalarType<T[P], AggregateUserCollection[P]>
  }




  export type UserCollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCollectionWhereInput
    orderBy?: UserCollectionOrderByWithAggregationInput | UserCollectionOrderByWithAggregationInput[]
    by: UserCollectionScalarFieldEnum[] | UserCollectionScalarFieldEnum
    having?: UserCollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCollectionCountAggregateInputType | true
    _avg?: UserCollectionAvgAggregateInputType
    _sum?: UserCollectionSumAggregateInputType
    _min?: UserCollectionMinAggregateInputType
    _max?: UserCollectionMaxAggregateInputType
  }

  export type UserCollectionGroupByOutputType = {
    id: string
    description: string | null
    name: string
    userId: string
    collectionId: number | null
    createdAt: Date
    status: boolean
    fatherId: string | null
    _count: UserCollectionCountAggregateOutputType | null
    _avg: UserCollectionAvgAggregateOutputType | null
    _sum: UserCollectionSumAggregateOutputType | null
    _min: UserCollectionMinAggregateOutputType | null
    _max: UserCollectionMaxAggregateOutputType | null
  }

  type GetUserCollectionGroupByPayload<T extends UserCollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCollectionGroupByOutputType[P]>
            : GetScalarType<T[P], UserCollectionGroupByOutputType[P]>
        }
      >
    >


  export type UserCollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    name?: boolean
    userId?: boolean
    collectionId?: boolean
    createdAt?: boolean
    status?: boolean
    fatherId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    collection?: boolean | UserCollection$collectionArgs<ExtArgs>
    parent?: boolean | UserCollection$parentArgs<ExtArgs>
    childCollections?: boolean | UserCollection$childCollectionsArgs<ExtArgs>
    items?: boolean | UserCollection$itemsArgs<ExtArgs>
    _count?: boolean | UserCollectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCollection"]>

  export type UserCollectionSelectScalar = {
    id?: boolean
    description?: boolean
    name?: boolean
    userId?: boolean
    collectionId?: boolean
    createdAt?: boolean
    status?: boolean
    fatherId?: boolean
  }

  export type UserCollectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    collection?: boolean | UserCollection$collectionArgs<ExtArgs>
    parent?: boolean | UserCollection$parentArgs<ExtArgs>
    childCollections?: boolean | UserCollection$childCollectionsArgs<ExtArgs>
    items?: boolean | UserCollection$itemsArgs<ExtArgs>
    _count?: boolean | UserCollectionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserCollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCollection"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      collection: Prisma.$CollectionPayload<ExtArgs> | null
      parent: Prisma.$UserCollectionPayload<ExtArgs> | null
      childCollections: Prisma.$UserCollectionPayload<ExtArgs>[]
      items: Prisma.$UserItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string | null
      name: string
      userId: string
      collectionId: number | null
      createdAt: Date
      status: boolean
      fatherId: string | null
    }, ExtArgs["result"]["userCollection"]>
    composites: {}
  }


  type UserCollectionGetPayload<S extends boolean | null | undefined | UserCollectionDefaultArgs> = $Result.GetResult<Prisma.$UserCollectionPayload, S>

  type UserCollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserCollectionFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCollectionCountAggregateInputType | true
    }

  export interface UserCollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCollection'], meta: { name: 'UserCollection' } }
    /**
     * Find zero or one UserCollection that matches the filter.
     * @param {UserCollectionFindUniqueArgs} args - Arguments to find a UserCollection
     * @example
     * // Get one UserCollection
     * const userCollection = await prisma.userCollection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserCollectionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserCollectionFindUniqueArgs<ExtArgs>>
    ): Prisma__UserCollectionClient<$Result.GetResult<Prisma.$UserCollectionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserCollection that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserCollectionFindUniqueOrThrowArgs} args - Arguments to find a UserCollection
     * @example
     * // Get one UserCollection
     * const userCollection = await prisma.userCollection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserCollectionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCollectionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserCollectionClient<$Result.GetResult<Prisma.$UserCollectionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserCollection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCollectionFindFirstArgs} args - Arguments to find a UserCollection
     * @example
     * // Get one UserCollection
     * const userCollection = await prisma.userCollection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserCollectionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCollectionFindFirstArgs<ExtArgs>>
    ): Prisma__UserCollectionClient<$Result.GetResult<Prisma.$UserCollectionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserCollection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCollectionFindFirstOrThrowArgs} args - Arguments to find a UserCollection
     * @example
     * // Get one UserCollection
     * const userCollection = await prisma.userCollection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserCollectionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCollectionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserCollectionClient<$Result.GetResult<Prisma.$UserCollectionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserCollections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCollectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCollections
     * const userCollections = await prisma.userCollection.findMany()
     * 
     * // Get first 10 UserCollections
     * const userCollections = await prisma.userCollection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCollectionWithIdOnly = await prisma.userCollection.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserCollectionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCollectionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCollectionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserCollection.
     * @param {UserCollectionCreateArgs} args - Arguments to create a UserCollection.
     * @example
     * // Create one UserCollection
     * const UserCollection = await prisma.userCollection.create({
     *   data: {
     *     // ... data to create a UserCollection
     *   }
     * })
     * 
    **/
    create<T extends UserCollectionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCollectionCreateArgs<ExtArgs>>
    ): Prisma__UserCollectionClient<$Result.GetResult<Prisma.$UserCollectionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserCollections.
     *     @param {UserCollectionCreateManyArgs} args - Arguments to create many UserCollections.
     *     @example
     *     // Create many UserCollections
     *     const userCollection = await prisma.userCollection.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCollectionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCollectionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserCollection.
     * @param {UserCollectionDeleteArgs} args - Arguments to delete one UserCollection.
     * @example
     * // Delete one UserCollection
     * const UserCollection = await prisma.userCollection.delete({
     *   where: {
     *     // ... filter to delete one UserCollection
     *   }
     * })
     * 
    **/
    delete<T extends UserCollectionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserCollectionDeleteArgs<ExtArgs>>
    ): Prisma__UserCollectionClient<$Result.GetResult<Prisma.$UserCollectionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserCollection.
     * @param {UserCollectionUpdateArgs} args - Arguments to update one UserCollection.
     * @example
     * // Update one UserCollection
     * const userCollection = await prisma.userCollection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserCollectionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCollectionUpdateArgs<ExtArgs>>
    ): Prisma__UserCollectionClient<$Result.GetResult<Prisma.$UserCollectionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserCollections.
     * @param {UserCollectionDeleteManyArgs} args - Arguments to filter UserCollections to delete.
     * @example
     * // Delete a few UserCollections
     * const { count } = await prisma.userCollection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserCollectionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCollectionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCollections
     * const userCollection = await prisma.userCollection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserCollectionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserCollectionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserCollection.
     * @param {UserCollectionUpsertArgs} args - Arguments to update or create a UserCollection.
     * @example
     * // Update or create a UserCollection
     * const userCollection = await prisma.userCollection.upsert({
     *   create: {
     *     // ... data to create a UserCollection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCollection we want to update
     *   }
     * })
    **/
    upsert<T extends UserCollectionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserCollectionUpsertArgs<ExtArgs>>
    ): Prisma__UserCollectionClient<$Result.GetResult<Prisma.$UserCollectionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserCollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCollectionCountArgs} args - Arguments to filter UserCollections to count.
     * @example
     * // Count the number of UserCollections
     * const count = await prisma.userCollection.count({
     *   where: {
     *     // ... the filter for the UserCollections we want to count
     *   }
     * })
    **/
    count<T extends UserCollectionCountArgs>(
      args?: Subset<T, UserCollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCollection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserCollectionAggregateArgs>(args: Subset<T, UserCollectionAggregateArgs>): Prisma.PrismaPromise<GetUserCollectionAggregateType<T>>

    /**
     * Group by UserCollection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCollectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserCollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCollectionGroupByArgs['orderBy'] }
        : { orderBy?: UserCollectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserCollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCollection model
   */
  readonly fields: UserCollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCollection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    collection<T extends UserCollection$collectionArgs<ExtArgs> = {}>(args?: Subset<T, UserCollection$collectionArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    parent<T extends UserCollection$parentArgs<ExtArgs> = {}>(args?: Subset<T, UserCollection$parentArgs<ExtArgs>>): Prisma__UserCollectionClient<$Result.GetResult<Prisma.$UserCollectionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    childCollections<T extends UserCollection$childCollectionsArgs<ExtArgs> = {}>(args?: Subset<T, UserCollection$childCollectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCollectionPayload<ExtArgs>, T, 'findMany'> | Null>;

    items<T extends UserCollection$itemsArgs<ExtArgs> = {}>(args?: Subset<T, UserCollection$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserCollection model
   */ 
  interface UserCollectionFieldRefs {
    readonly id: FieldRef<"UserCollection", 'String'>
    readonly description: FieldRef<"UserCollection", 'String'>
    readonly name: FieldRef<"UserCollection", 'String'>
    readonly userId: FieldRef<"UserCollection", 'String'>
    readonly collectionId: FieldRef<"UserCollection", 'Int'>
    readonly createdAt: FieldRef<"UserCollection", 'DateTime'>
    readonly status: FieldRef<"UserCollection", 'Boolean'>
    readonly fatherId: FieldRef<"UserCollection", 'String'>
  }
    

  // Custom InputTypes

  /**
   * UserCollection findUnique
   */
  export type UserCollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollection
     */
    select?: UserCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCollectionInclude<ExtArgs> | null
    /**
     * Filter, which UserCollection to fetch.
     */
    where: UserCollectionWhereUniqueInput
  }


  /**
   * UserCollection findUniqueOrThrow
   */
  export type UserCollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollection
     */
    select?: UserCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCollectionInclude<ExtArgs> | null
    /**
     * Filter, which UserCollection to fetch.
     */
    where: UserCollectionWhereUniqueInput
  }


  /**
   * UserCollection findFirst
   */
  export type UserCollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollection
     */
    select?: UserCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCollectionInclude<ExtArgs> | null
    /**
     * Filter, which UserCollection to fetch.
     */
    where?: UserCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCollections to fetch.
     */
    orderBy?: UserCollectionOrderByWithRelationInput | UserCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCollections.
     */
    cursor?: UserCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCollections.
     */
    distinct?: UserCollectionScalarFieldEnum | UserCollectionScalarFieldEnum[]
  }


  /**
   * UserCollection findFirstOrThrow
   */
  export type UserCollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollection
     */
    select?: UserCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCollectionInclude<ExtArgs> | null
    /**
     * Filter, which UserCollection to fetch.
     */
    where?: UserCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCollections to fetch.
     */
    orderBy?: UserCollectionOrderByWithRelationInput | UserCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCollections.
     */
    cursor?: UserCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCollections.
     */
    distinct?: UserCollectionScalarFieldEnum | UserCollectionScalarFieldEnum[]
  }


  /**
   * UserCollection findMany
   */
  export type UserCollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollection
     */
    select?: UserCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCollectionInclude<ExtArgs> | null
    /**
     * Filter, which UserCollections to fetch.
     */
    where?: UserCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCollections to fetch.
     */
    orderBy?: UserCollectionOrderByWithRelationInput | UserCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCollections.
     */
    cursor?: UserCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCollections.
     */
    skip?: number
    distinct?: UserCollectionScalarFieldEnum | UserCollectionScalarFieldEnum[]
  }


  /**
   * UserCollection create
   */
  export type UserCollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollection
     */
    select?: UserCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCollectionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCollection.
     */
    data: XOR<UserCollectionCreateInput, UserCollectionUncheckedCreateInput>
  }


  /**
   * UserCollection createMany
   */
  export type UserCollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCollections.
     */
    data: UserCollectionCreateManyInput | UserCollectionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserCollection update
   */
  export type UserCollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollection
     */
    select?: UserCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCollectionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCollection.
     */
    data: XOR<UserCollectionUpdateInput, UserCollectionUncheckedUpdateInput>
    /**
     * Choose, which UserCollection to update.
     */
    where: UserCollectionWhereUniqueInput
  }


  /**
   * UserCollection updateMany
   */
  export type UserCollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCollections.
     */
    data: XOR<UserCollectionUpdateManyMutationInput, UserCollectionUncheckedUpdateManyInput>
    /**
     * Filter which UserCollections to update
     */
    where?: UserCollectionWhereInput
  }


  /**
   * UserCollection upsert
   */
  export type UserCollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollection
     */
    select?: UserCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCollectionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCollection to update in case it exists.
     */
    where: UserCollectionWhereUniqueInput
    /**
     * In case the UserCollection found by the `where` argument doesn't exist, create a new UserCollection with this data.
     */
    create: XOR<UserCollectionCreateInput, UserCollectionUncheckedCreateInput>
    /**
     * In case the UserCollection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCollectionUpdateInput, UserCollectionUncheckedUpdateInput>
  }


  /**
   * UserCollection delete
   */
  export type UserCollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollection
     */
    select?: UserCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCollectionInclude<ExtArgs> | null
    /**
     * Filter which UserCollection to delete.
     */
    where: UserCollectionWhereUniqueInput
  }


  /**
   * UserCollection deleteMany
   */
  export type UserCollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCollections to delete
     */
    where?: UserCollectionWhereInput
  }


  /**
   * UserCollection.collection
   */
  export type UserCollection$collectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollectionInclude<ExtArgs> | null
    where?: CollectionWhereInput
  }


  /**
   * UserCollection.parent
   */
  export type UserCollection$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollection
     */
    select?: UserCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCollectionInclude<ExtArgs> | null
    where?: UserCollectionWhereInput
  }


  /**
   * UserCollection.childCollections
   */
  export type UserCollection$childCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollection
     */
    select?: UserCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCollectionInclude<ExtArgs> | null
    where?: UserCollectionWhereInput
    orderBy?: UserCollectionOrderByWithRelationInput | UserCollectionOrderByWithRelationInput[]
    cursor?: UserCollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCollectionScalarFieldEnum | UserCollectionScalarFieldEnum[]
  }


  /**
   * UserCollection.items
   */
  export type UserCollection$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserItemInclude<ExtArgs> | null
    where?: UserItemWhereInput
    orderBy?: UserItemOrderByWithRelationInput | UserItemOrderByWithRelationInput[]
    cursor?: UserItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserItemScalarFieldEnum | UserItemScalarFieldEnum[]
  }


  /**
   * UserCollection without action
   */
  export type UserCollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollection
     */
    select?: UserCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCollectionInclude<ExtArgs> | null
  }



  /**
   * Model UserItem
   */

  export type AggregateUserItem = {
    _count: UserItemCountAggregateOutputType | null
    _min: UserItemMinAggregateOutputType | null
    _max: UserItemMaxAggregateOutputType | null
  }

  export type UserItemMinAggregateOutputType = {
    createdAt: Date | null
    description: string | null
    scale: string | null
    name: string | null
    itemId: string | null
    userCollectionId: string | null
  }

  export type UserItemMaxAggregateOutputType = {
    createdAt: Date | null
    description: string | null
    scale: string | null
    name: string | null
    itemId: string | null
    userCollectionId: string | null
  }

  export type UserItemCountAggregateOutputType = {
    createdAt: number
    description: number
    scale: number
    name: number
    itemId: number
    userCollectionId: number
    _all: number
  }


  export type UserItemMinAggregateInputType = {
    createdAt?: true
    description?: true
    scale?: true
    name?: true
    itemId?: true
    userCollectionId?: true
  }

  export type UserItemMaxAggregateInputType = {
    createdAt?: true
    description?: true
    scale?: true
    name?: true
    itemId?: true
    userCollectionId?: true
  }

  export type UserItemCountAggregateInputType = {
    createdAt?: true
    description?: true
    scale?: true
    name?: true
    itemId?: true
    userCollectionId?: true
    _all?: true
  }

  export type UserItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserItem to aggregate.
     */
    where?: UserItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserItems to fetch.
     */
    orderBy?: UserItemOrderByWithRelationInput | UserItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserItems
    **/
    _count?: true | UserItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserItemMaxAggregateInputType
  }

  export type GetUserItemAggregateType<T extends UserItemAggregateArgs> = {
        [P in keyof T & keyof AggregateUserItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserItem[P]>
      : GetScalarType<T[P], AggregateUserItem[P]>
  }




  export type UserItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserItemWhereInput
    orderBy?: UserItemOrderByWithAggregationInput | UserItemOrderByWithAggregationInput[]
    by: UserItemScalarFieldEnum[] | UserItemScalarFieldEnum
    having?: UserItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserItemCountAggregateInputType | true
    _min?: UserItemMinAggregateInputType
    _max?: UserItemMaxAggregateInputType
  }

  export type UserItemGroupByOutputType = {
    createdAt: Date
    description: string | null
    scale: string | null
    name: string | null
    itemId: string
    userCollectionId: string
    _count: UserItemCountAggregateOutputType | null
    _min: UserItemMinAggregateOutputType | null
    _max: UserItemMaxAggregateOutputType | null
  }

  type GetUserItemGroupByPayload<T extends UserItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserItemGroupByOutputType[P]>
            : GetScalarType<T[P], UserItemGroupByOutputType[P]>
        }
      >
    >


  export type UserItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    createdAt?: boolean
    description?: boolean
    scale?: boolean
    name?: boolean
    itemId?: boolean
    userCollectionId?: boolean
    userCollection?: boolean | UserItem$userCollectionArgs<ExtArgs>
    item?: boolean | UserItem$itemArgs<ExtArgs>
    itemImages?: boolean | UserItem$itemImagesArgs<ExtArgs>
    _count?: boolean | UserItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userItem"]>

  export type UserItemSelectScalar = {
    createdAt?: boolean
    description?: boolean
    scale?: boolean
    name?: boolean
    itemId?: boolean
    userCollectionId?: boolean
  }

  export type UserItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCollection?: boolean | UserItem$userCollectionArgs<ExtArgs>
    item?: boolean | UserItem$itemArgs<ExtArgs>
    itemImages?: boolean | UserItem$itemImagesArgs<ExtArgs>
    _count?: boolean | UserItemCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserItem"
    objects: {
      userCollection: Prisma.$UserCollectionPayload<ExtArgs> | null
      item: Prisma.$ItemPayload<ExtArgs> | null
      itemImages: Prisma.$UserItemImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      createdAt: Date
      description: string | null
      scale: string | null
      name: string | null
      itemId: string
      userCollectionId: string
    }, ExtArgs["result"]["userItem"]>
    composites: {}
  }


  type UserItemGetPayload<S extends boolean | null | undefined | UserItemDefaultArgs> = $Result.GetResult<Prisma.$UserItemPayload, S>

  type UserItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserItemFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserItemCountAggregateInputType | true
    }

  export interface UserItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserItem'], meta: { name: 'UserItem' } }
    /**
     * Find zero or one UserItem that matches the filter.
     * @param {UserItemFindUniqueArgs} args - Arguments to find a UserItem
     * @example
     * // Get one UserItem
     * const userItem = await prisma.userItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserItemFindUniqueArgs<ExtArgs>>
    ): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserItemFindUniqueOrThrowArgs} args - Arguments to find a UserItem
     * @example
     * // Get one UserItem
     * const userItem = await prisma.userItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemFindFirstArgs} args - Arguments to find a UserItem
     * @example
     * // Get one UserItem
     * const userItem = await prisma.userItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserItemFindFirstArgs<ExtArgs>>
    ): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemFindFirstOrThrowArgs} args - Arguments to find a UserItem
     * @example
     * // Get one UserItem
     * const userItem = await prisma.userItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserItems
     * const userItems = await prisma.userItem.findMany()
     * 
     * // Get first 10 UserItems
     * const userItems = await prisma.userItem.findMany({ take: 10 })
     * 
     * // Only select the `createdAt`
     * const userItemWithCreatedAtOnly = await prisma.userItem.findMany({ select: { createdAt: true } })
     * 
    **/
    findMany<T extends UserItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserItem.
     * @param {UserItemCreateArgs} args - Arguments to create a UserItem.
     * @example
     * // Create one UserItem
     * const UserItem = await prisma.userItem.create({
     *   data: {
     *     // ... data to create a UserItem
     *   }
     * })
     * 
    **/
    create<T extends UserItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserItemCreateArgs<ExtArgs>>
    ): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserItems.
     *     @param {UserItemCreateManyArgs} args - Arguments to create many UserItems.
     *     @example
     *     // Create many UserItems
     *     const userItem = await prisma.userItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserItem.
     * @param {UserItemDeleteArgs} args - Arguments to delete one UserItem.
     * @example
     * // Delete one UserItem
     * const UserItem = await prisma.userItem.delete({
     *   where: {
     *     // ... filter to delete one UserItem
     *   }
     * })
     * 
    **/
    delete<T extends UserItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserItemDeleteArgs<ExtArgs>>
    ): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserItem.
     * @param {UserItemUpdateArgs} args - Arguments to update one UserItem.
     * @example
     * // Update one UserItem
     * const userItem = await prisma.userItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserItemUpdateArgs<ExtArgs>>
    ): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserItems.
     * @param {UserItemDeleteManyArgs} args - Arguments to filter UserItems to delete.
     * @example
     * // Delete a few UserItems
     * const { count } = await prisma.userItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserItems
     * const userItem = await prisma.userItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserItem.
     * @param {UserItemUpsertArgs} args - Arguments to update or create a UserItem.
     * @example
     * // Update or create a UserItem
     * const userItem = await prisma.userItem.upsert({
     *   create: {
     *     // ... data to create a UserItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserItem we want to update
     *   }
     * })
    **/
    upsert<T extends UserItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserItemUpsertArgs<ExtArgs>>
    ): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemCountArgs} args - Arguments to filter UserItems to count.
     * @example
     * // Count the number of UserItems
     * const count = await prisma.userItem.count({
     *   where: {
     *     // ... the filter for the UserItems we want to count
     *   }
     * })
    **/
    count<T extends UserItemCountArgs>(
      args?: Subset<T, UserItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserItemAggregateArgs>(args: Subset<T, UserItemAggregateArgs>): Prisma.PrismaPromise<GetUserItemAggregateType<T>>

    /**
     * Group by UserItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserItemGroupByArgs['orderBy'] }
        : { orderBy?: UserItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserItem model
   */
  readonly fields: UserItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    userCollection<T extends UserItem$userCollectionArgs<ExtArgs> = {}>(args?: Subset<T, UserItem$userCollectionArgs<ExtArgs>>): Prisma__UserCollectionClient<$Result.GetResult<Prisma.$UserCollectionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    item<T extends UserItem$itemArgs<ExtArgs> = {}>(args?: Subset<T, UserItem$itemArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    itemImages<T extends UserItem$itemImagesArgs<ExtArgs> = {}>(args?: Subset<T, UserItem$itemImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserItemImagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserItem model
   */ 
  interface UserItemFieldRefs {
    readonly createdAt: FieldRef<"UserItem", 'DateTime'>
    readonly description: FieldRef<"UserItem", 'String'>
    readonly scale: FieldRef<"UserItem", 'String'>
    readonly name: FieldRef<"UserItem", 'String'>
    readonly itemId: FieldRef<"UserItem", 'String'>
    readonly userCollectionId: FieldRef<"UserItem", 'String'>
  }
    

  // Custom InputTypes

  /**
   * UserItem findUnique
   */
  export type UserItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * Filter, which UserItem to fetch.
     */
    where: UserItemWhereUniqueInput
  }


  /**
   * UserItem findUniqueOrThrow
   */
  export type UserItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * Filter, which UserItem to fetch.
     */
    where: UserItemWhereUniqueInput
  }


  /**
   * UserItem findFirst
   */
  export type UserItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * Filter, which UserItem to fetch.
     */
    where?: UserItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserItems to fetch.
     */
    orderBy?: UserItemOrderByWithRelationInput | UserItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserItems.
     */
    cursor?: UserItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserItems.
     */
    distinct?: UserItemScalarFieldEnum | UserItemScalarFieldEnum[]
  }


  /**
   * UserItem findFirstOrThrow
   */
  export type UserItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * Filter, which UserItem to fetch.
     */
    where?: UserItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserItems to fetch.
     */
    orderBy?: UserItemOrderByWithRelationInput | UserItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserItems.
     */
    cursor?: UserItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserItems.
     */
    distinct?: UserItemScalarFieldEnum | UserItemScalarFieldEnum[]
  }


  /**
   * UserItem findMany
   */
  export type UserItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * Filter, which UserItems to fetch.
     */
    where?: UserItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserItems to fetch.
     */
    orderBy?: UserItemOrderByWithRelationInput | UserItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserItems.
     */
    cursor?: UserItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserItems.
     */
    skip?: number
    distinct?: UserItemScalarFieldEnum | UserItemScalarFieldEnum[]
  }


  /**
   * UserItem create
   */
  export type UserItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * The data needed to create a UserItem.
     */
    data: XOR<UserItemCreateInput, UserItemUncheckedCreateInput>
  }


  /**
   * UserItem createMany
   */
  export type UserItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserItems.
     */
    data: UserItemCreateManyInput | UserItemCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserItem update
   */
  export type UserItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * The data needed to update a UserItem.
     */
    data: XOR<UserItemUpdateInput, UserItemUncheckedUpdateInput>
    /**
     * Choose, which UserItem to update.
     */
    where: UserItemWhereUniqueInput
  }


  /**
   * UserItem updateMany
   */
  export type UserItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserItems.
     */
    data: XOR<UserItemUpdateManyMutationInput, UserItemUncheckedUpdateManyInput>
    /**
     * Filter which UserItems to update
     */
    where?: UserItemWhereInput
  }


  /**
   * UserItem upsert
   */
  export type UserItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * The filter to search for the UserItem to update in case it exists.
     */
    where: UserItemWhereUniqueInput
    /**
     * In case the UserItem found by the `where` argument doesn't exist, create a new UserItem with this data.
     */
    create: XOR<UserItemCreateInput, UserItemUncheckedCreateInput>
    /**
     * In case the UserItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserItemUpdateInput, UserItemUncheckedUpdateInput>
  }


  /**
   * UserItem delete
   */
  export type UserItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * Filter which UserItem to delete.
     */
    where: UserItemWhereUniqueInput
  }


  /**
   * UserItem deleteMany
   */
  export type UserItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserItems to delete
     */
    where?: UserItemWhereInput
  }


  /**
   * UserItem.userCollection
   */
  export type UserItem$userCollectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCollection
     */
    select?: UserCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCollectionInclude<ExtArgs> | null
    where?: UserCollectionWhereInput
  }


  /**
   * UserItem.item
   */
  export type UserItem$itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
  }


  /**
   * UserItem.itemImages
   */
  export type UserItem$itemImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItemImage
     */
    select?: UserItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserItemImageInclude<ExtArgs> | null
    where?: UserItemImageWhereInput
    orderBy?: UserItemImageOrderByWithRelationInput | UserItemImageOrderByWithRelationInput[]
    cursor?: UserItemImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserItemImageScalarFieldEnum | UserItemImageScalarFieldEnum[]
  }


  /**
   * UserItem without action
   */
  export type UserItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserItemInclude<ExtArgs> | null
  }



  /**
   * Model UserItemImage
   */

  export type AggregateUserItemImage = {
    _count: UserItemImageCountAggregateOutputType | null
    _min: UserItemImageMinAggregateOutputType | null
    _max: UserItemImageMaxAggregateOutputType | null
  }

  export type UserItemImageMinAggregateOutputType = {
    id: string | null
    itemId: string | null
    userCollectionId: string | null
    link: string | null
    fileName: string | null
    principal: boolean | null
    createdAt: Date | null
    status: boolean | null
  }

  export type UserItemImageMaxAggregateOutputType = {
    id: string | null
    itemId: string | null
    userCollectionId: string | null
    link: string | null
    fileName: string | null
    principal: boolean | null
    createdAt: Date | null
    status: boolean | null
  }

  export type UserItemImageCountAggregateOutputType = {
    id: number
    itemId: number
    userCollectionId: number
    link: number
    fileName: number
    principal: number
    createdAt: number
    status: number
    _all: number
  }


  export type UserItemImageMinAggregateInputType = {
    id?: true
    itemId?: true
    userCollectionId?: true
    link?: true
    fileName?: true
    principal?: true
    createdAt?: true
    status?: true
  }

  export type UserItemImageMaxAggregateInputType = {
    id?: true
    itemId?: true
    userCollectionId?: true
    link?: true
    fileName?: true
    principal?: true
    createdAt?: true
    status?: true
  }

  export type UserItemImageCountAggregateInputType = {
    id?: true
    itemId?: true
    userCollectionId?: true
    link?: true
    fileName?: true
    principal?: true
    createdAt?: true
    status?: true
    _all?: true
  }

  export type UserItemImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserItemImage to aggregate.
     */
    where?: UserItemImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserItemImages to fetch.
     */
    orderBy?: UserItemImageOrderByWithRelationInput | UserItemImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserItemImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserItemImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserItemImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserItemImages
    **/
    _count?: true | UserItemImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserItemImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserItemImageMaxAggregateInputType
  }

  export type GetUserItemImageAggregateType<T extends UserItemImageAggregateArgs> = {
        [P in keyof T & keyof AggregateUserItemImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserItemImage[P]>
      : GetScalarType<T[P], AggregateUserItemImage[P]>
  }




  export type UserItemImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserItemImageWhereInput
    orderBy?: UserItemImageOrderByWithAggregationInput | UserItemImageOrderByWithAggregationInput[]
    by: UserItemImageScalarFieldEnum[] | UserItemImageScalarFieldEnum
    having?: UserItemImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserItemImageCountAggregateInputType | true
    _min?: UserItemImageMinAggregateInputType
    _max?: UserItemImageMaxAggregateInputType
  }

  export type UserItemImageGroupByOutputType = {
    id: string
    itemId: string
    userCollectionId: string
    link: string
    fileName: string
    principal: boolean
    createdAt: Date
    status: boolean
    _count: UserItemImageCountAggregateOutputType | null
    _min: UserItemImageMinAggregateOutputType | null
    _max: UserItemImageMaxAggregateOutputType | null
  }

  type GetUserItemImageGroupByPayload<T extends UserItemImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserItemImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserItemImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserItemImageGroupByOutputType[P]>
            : GetScalarType<T[P], UserItemImageGroupByOutputType[P]>
        }
      >
    >


  export type UserItemImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    userCollectionId?: boolean
    link?: boolean
    fileName?: boolean
    principal?: boolean
    createdAt?: boolean
    status?: boolean
    userItem?: boolean | UserItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userItemImage"]>

  export type UserItemImageSelectScalar = {
    id?: boolean
    itemId?: boolean
    userCollectionId?: boolean
    link?: boolean
    fileName?: boolean
    principal?: boolean
    createdAt?: boolean
    status?: boolean
  }

  export type UserItemImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userItem?: boolean | UserItemDefaultArgs<ExtArgs>
  }


  export type $UserItemImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserItemImage"
    objects: {
      userItem: Prisma.$UserItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      itemId: string
      userCollectionId: string
      link: string
      fileName: string
      principal: boolean
      createdAt: Date
      status: boolean
    }, ExtArgs["result"]["userItemImage"]>
    composites: {}
  }


  type UserItemImageGetPayload<S extends boolean | null | undefined | UserItemImageDefaultArgs> = $Result.GetResult<Prisma.$UserItemImagePayload, S>

  type UserItemImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserItemImageFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserItemImageCountAggregateInputType | true
    }

  export interface UserItemImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserItemImage'], meta: { name: 'UserItemImage' } }
    /**
     * Find zero or one UserItemImage that matches the filter.
     * @param {UserItemImageFindUniqueArgs} args - Arguments to find a UserItemImage
     * @example
     * // Get one UserItemImage
     * const userItemImage = await prisma.userItemImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserItemImageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserItemImageFindUniqueArgs<ExtArgs>>
    ): Prisma__UserItemImageClient<$Result.GetResult<Prisma.$UserItemImagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserItemImage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserItemImageFindUniqueOrThrowArgs} args - Arguments to find a UserItemImage
     * @example
     * // Get one UserItemImage
     * const userItemImage = await prisma.userItemImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserItemImageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserItemImageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserItemImageClient<$Result.GetResult<Prisma.$UserItemImagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserItemImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemImageFindFirstArgs} args - Arguments to find a UserItemImage
     * @example
     * // Get one UserItemImage
     * const userItemImage = await prisma.userItemImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserItemImageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserItemImageFindFirstArgs<ExtArgs>>
    ): Prisma__UserItemImageClient<$Result.GetResult<Prisma.$UserItemImagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserItemImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemImageFindFirstOrThrowArgs} args - Arguments to find a UserItemImage
     * @example
     * // Get one UserItemImage
     * const userItemImage = await prisma.userItemImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserItemImageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserItemImageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserItemImageClient<$Result.GetResult<Prisma.$UserItemImagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserItemImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserItemImages
     * const userItemImages = await prisma.userItemImage.findMany()
     * 
     * // Get first 10 UserItemImages
     * const userItemImages = await prisma.userItemImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userItemImageWithIdOnly = await prisma.userItemImage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserItemImageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserItemImageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserItemImagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserItemImage.
     * @param {UserItemImageCreateArgs} args - Arguments to create a UserItemImage.
     * @example
     * // Create one UserItemImage
     * const UserItemImage = await prisma.userItemImage.create({
     *   data: {
     *     // ... data to create a UserItemImage
     *   }
     * })
     * 
    **/
    create<T extends UserItemImageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserItemImageCreateArgs<ExtArgs>>
    ): Prisma__UserItemImageClient<$Result.GetResult<Prisma.$UserItemImagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserItemImages.
     *     @param {UserItemImageCreateManyArgs} args - Arguments to create many UserItemImages.
     *     @example
     *     // Create many UserItemImages
     *     const userItemImage = await prisma.userItemImage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserItemImageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserItemImageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserItemImage.
     * @param {UserItemImageDeleteArgs} args - Arguments to delete one UserItemImage.
     * @example
     * // Delete one UserItemImage
     * const UserItemImage = await prisma.userItemImage.delete({
     *   where: {
     *     // ... filter to delete one UserItemImage
     *   }
     * })
     * 
    **/
    delete<T extends UserItemImageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserItemImageDeleteArgs<ExtArgs>>
    ): Prisma__UserItemImageClient<$Result.GetResult<Prisma.$UserItemImagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserItemImage.
     * @param {UserItemImageUpdateArgs} args - Arguments to update one UserItemImage.
     * @example
     * // Update one UserItemImage
     * const userItemImage = await prisma.userItemImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserItemImageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserItemImageUpdateArgs<ExtArgs>>
    ): Prisma__UserItemImageClient<$Result.GetResult<Prisma.$UserItemImagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserItemImages.
     * @param {UserItemImageDeleteManyArgs} args - Arguments to filter UserItemImages to delete.
     * @example
     * // Delete a few UserItemImages
     * const { count } = await prisma.userItemImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserItemImageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserItemImageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserItemImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserItemImages
     * const userItemImage = await prisma.userItemImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserItemImageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserItemImageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserItemImage.
     * @param {UserItemImageUpsertArgs} args - Arguments to update or create a UserItemImage.
     * @example
     * // Update or create a UserItemImage
     * const userItemImage = await prisma.userItemImage.upsert({
     *   create: {
     *     // ... data to create a UserItemImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserItemImage we want to update
     *   }
     * })
    **/
    upsert<T extends UserItemImageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserItemImageUpsertArgs<ExtArgs>>
    ): Prisma__UserItemImageClient<$Result.GetResult<Prisma.$UserItemImagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserItemImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemImageCountArgs} args - Arguments to filter UserItemImages to count.
     * @example
     * // Count the number of UserItemImages
     * const count = await prisma.userItemImage.count({
     *   where: {
     *     // ... the filter for the UserItemImages we want to count
     *   }
     * })
    **/
    count<T extends UserItemImageCountArgs>(
      args?: Subset<T, UserItemImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserItemImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserItemImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserItemImageAggregateArgs>(args: Subset<T, UserItemImageAggregateArgs>): Prisma.PrismaPromise<GetUserItemImageAggregateType<T>>

    /**
     * Group by UserItemImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserItemImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserItemImageGroupByArgs['orderBy'] }
        : { orderBy?: UserItemImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserItemImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserItemImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserItemImage model
   */
  readonly fields: UserItemImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserItemImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserItemImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    userItem<T extends UserItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserItemDefaultArgs<ExtArgs>>): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserItemImage model
   */ 
  interface UserItemImageFieldRefs {
    readonly id: FieldRef<"UserItemImage", 'String'>
    readonly itemId: FieldRef<"UserItemImage", 'String'>
    readonly userCollectionId: FieldRef<"UserItemImage", 'String'>
    readonly link: FieldRef<"UserItemImage", 'String'>
    readonly fileName: FieldRef<"UserItemImage", 'String'>
    readonly principal: FieldRef<"UserItemImage", 'Boolean'>
    readonly createdAt: FieldRef<"UserItemImage", 'DateTime'>
    readonly status: FieldRef<"UserItemImage", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * UserItemImage findUnique
   */
  export type UserItemImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItemImage
     */
    select?: UserItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserItemImageInclude<ExtArgs> | null
    /**
     * Filter, which UserItemImage to fetch.
     */
    where: UserItemImageWhereUniqueInput
  }


  /**
   * UserItemImage findUniqueOrThrow
   */
  export type UserItemImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItemImage
     */
    select?: UserItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserItemImageInclude<ExtArgs> | null
    /**
     * Filter, which UserItemImage to fetch.
     */
    where: UserItemImageWhereUniqueInput
  }


  /**
   * UserItemImage findFirst
   */
  export type UserItemImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItemImage
     */
    select?: UserItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserItemImageInclude<ExtArgs> | null
    /**
     * Filter, which UserItemImage to fetch.
     */
    where?: UserItemImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserItemImages to fetch.
     */
    orderBy?: UserItemImageOrderByWithRelationInput | UserItemImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserItemImages.
     */
    cursor?: UserItemImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserItemImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserItemImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserItemImages.
     */
    distinct?: UserItemImageScalarFieldEnum | UserItemImageScalarFieldEnum[]
  }


  /**
   * UserItemImage findFirstOrThrow
   */
  export type UserItemImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItemImage
     */
    select?: UserItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserItemImageInclude<ExtArgs> | null
    /**
     * Filter, which UserItemImage to fetch.
     */
    where?: UserItemImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserItemImages to fetch.
     */
    orderBy?: UserItemImageOrderByWithRelationInput | UserItemImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserItemImages.
     */
    cursor?: UserItemImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserItemImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserItemImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserItemImages.
     */
    distinct?: UserItemImageScalarFieldEnum | UserItemImageScalarFieldEnum[]
  }


  /**
   * UserItemImage findMany
   */
  export type UserItemImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItemImage
     */
    select?: UserItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserItemImageInclude<ExtArgs> | null
    /**
     * Filter, which UserItemImages to fetch.
     */
    where?: UserItemImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserItemImages to fetch.
     */
    orderBy?: UserItemImageOrderByWithRelationInput | UserItemImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserItemImages.
     */
    cursor?: UserItemImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserItemImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserItemImages.
     */
    skip?: number
    distinct?: UserItemImageScalarFieldEnum | UserItemImageScalarFieldEnum[]
  }


  /**
   * UserItemImage create
   */
  export type UserItemImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItemImage
     */
    select?: UserItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserItemImageInclude<ExtArgs> | null
    /**
     * The data needed to create a UserItemImage.
     */
    data: XOR<UserItemImageCreateInput, UserItemImageUncheckedCreateInput>
  }


  /**
   * UserItemImage createMany
   */
  export type UserItemImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserItemImages.
     */
    data: UserItemImageCreateManyInput | UserItemImageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserItemImage update
   */
  export type UserItemImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItemImage
     */
    select?: UserItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserItemImageInclude<ExtArgs> | null
    /**
     * The data needed to update a UserItemImage.
     */
    data: XOR<UserItemImageUpdateInput, UserItemImageUncheckedUpdateInput>
    /**
     * Choose, which UserItemImage to update.
     */
    where: UserItemImageWhereUniqueInput
  }


  /**
   * UserItemImage updateMany
   */
  export type UserItemImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserItemImages.
     */
    data: XOR<UserItemImageUpdateManyMutationInput, UserItemImageUncheckedUpdateManyInput>
    /**
     * Filter which UserItemImages to update
     */
    where?: UserItemImageWhereInput
  }


  /**
   * UserItemImage upsert
   */
  export type UserItemImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItemImage
     */
    select?: UserItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserItemImageInclude<ExtArgs> | null
    /**
     * The filter to search for the UserItemImage to update in case it exists.
     */
    where: UserItemImageWhereUniqueInput
    /**
     * In case the UserItemImage found by the `where` argument doesn't exist, create a new UserItemImage with this data.
     */
    create: XOR<UserItemImageCreateInput, UserItemImageUncheckedCreateInput>
    /**
     * In case the UserItemImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserItemImageUpdateInput, UserItemImageUncheckedUpdateInput>
  }


  /**
   * UserItemImage delete
   */
  export type UserItemImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItemImage
     */
    select?: UserItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserItemImageInclude<ExtArgs> | null
    /**
     * Filter which UserItemImage to delete.
     */
    where: UserItemImageWhereUniqueInput
  }


  /**
   * UserItemImage deleteMany
   */
  export type UserItemImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserItemImages to delete
     */
    where?: UserItemImageWhereInput
  }


  /**
   * UserItemImage without action
   */
  export type UserItemImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItemImage
     */
    select?: UserItemImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserItemImageInclude<ExtArgs> | null
  }



  /**
   * Model LogStripeWebhook
   */

  export type AggregateLogStripeWebhook = {
    _count: LogStripeWebhookCountAggregateOutputType | null
    _min: LogStripeWebhookMinAggregateOutputType | null
    _max: LogStripeWebhookMaxAggregateOutputType | null
  }

  export type LogStripeWebhookMinAggregateOutputType = {
    id: string | null
    description: string | null
    eventType: string | null
    error: string | null
    custumerId: string | null
    status: boolean | null
    data: Date | null
  }

  export type LogStripeWebhookMaxAggregateOutputType = {
    id: string | null
    description: string | null
    eventType: string | null
    error: string | null
    custumerId: string | null
    status: boolean | null
    data: Date | null
  }

  export type LogStripeWebhookCountAggregateOutputType = {
    id: number
    description: number
    eventType: number
    error: number
    custumerId: number
    status: number
    data: number
    _all: number
  }


  export type LogStripeWebhookMinAggregateInputType = {
    id?: true
    description?: true
    eventType?: true
    error?: true
    custumerId?: true
    status?: true
    data?: true
  }

  export type LogStripeWebhookMaxAggregateInputType = {
    id?: true
    description?: true
    eventType?: true
    error?: true
    custumerId?: true
    status?: true
    data?: true
  }

  export type LogStripeWebhookCountAggregateInputType = {
    id?: true
    description?: true
    eventType?: true
    error?: true
    custumerId?: true
    status?: true
    data?: true
    _all?: true
  }

  export type LogStripeWebhookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogStripeWebhook to aggregate.
     */
    where?: LogStripeWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogStripeWebhooks to fetch.
     */
    orderBy?: LogStripeWebhookOrderByWithRelationInput | LogStripeWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogStripeWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogStripeWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogStripeWebhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogStripeWebhooks
    **/
    _count?: true | LogStripeWebhookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogStripeWebhookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogStripeWebhookMaxAggregateInputType
  }

  export type GetLogStripeWebhookAggregateType<T extends LogStripeWebhookAggregateArgs> = {
        [P in keyof T & keyof AggregateLogStripeWebhook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogStripeWebhook[P]>
      : GetScalarType<T[P], AggregateLogStripeWebhook[P]>
  }




  export type LogStripeWebhookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogStripeWebhookWhereInput
    orderBy?: LogStripeWebhookOrderByWithAggregationInput | LogStripeWebhookOrderByWithAggregationInput[]
    by: LogStripeWebhookScalarFieldEnum[] | LogStripeWebhookScalarFieldEnum
    having?: LogStripeWebhookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogStripeWebhookCountAggregateInputType | true
    _min?: LogStripeWebhookMinAggregateInputType
    _max?: LogStripeWebhookMaxAggregateInputType
  }

  export type LogStripeWebhookGroupByOutputType = {
    id: string
    description: string | null
    eventType: string | null
    error: string | null
    custumerId: string | null
    status: boolean
    data: Date
    _count: LogStripeWebhookCountAggregateOutputType | null
    _min: LogStripeWebhookMinAggregateOutputType | null
    _max: LogStripeWebhookMaxAggregateOutputType | null
  }

  type GetLogStripeWebhookGroupByPayload<T extends LogStripeWebhookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogStripeWebhookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogStripeWebhookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogStripeWebhookGroupByOutputType[P]>
            : GetScalarType<T[P], LogStripeWebhookGroupByOutputType[P]>
        }
      >
    >


  export type LogStripeWebhookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    eventType?: boolean
    error?: boolean
    custumerId?: boolean
    status?: boolean
    data?: boolean
  }, ExtArgs["result"]["logStripeWebhook"]>

  export type LogStripeWebhookSelectScalar = {
    id?: boolean
    description?: boolean
    eventType?: boolean
    error?: boolean
    custumerId?: boolean
    status?: boolean
    data?: boolean
  }


  export type $LogStripeWebhookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogStripeWebhook"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string | null
      eventType: string | null
      error: string | null
      custumerId: string | null
      status: boolean
      data: Date
    }, ExtArgs["result"]["logStripeWebhook"]>
    composites: {}
  }


  type LogStripeWebhookGetPayload<S extends boolean | null | undefined | LogStripeWebhookDefaultArgs> = $Result.GetResult<Prisma.$LogStripeWebhookPayload, S>

  type LogStripeWebhookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LogStripeWebhookFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: LogStripeWebhookCountAggregateInputType | true
    }

  export interface LogStripeWebhookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogStripeWebhook'], meta: { name: 'LogStripeWebhook' } }
    /**
     * Find zero or one LogStripeWebhook that matches the filter.
     * @param {LogStripeWebhookFindUniqueArgs} args - Arguments to find a LogStripeWebhook
     * @example
     * // Get one LogStripeWebhook
     * const logStripeWebhook = await prisma.logStripeWebhook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LogStripeWebhookFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LogStripeWebhookFindUniqueArgs<ExtArgs>>
    ): Prisma__LogStripeWebhookClient<$Result.GetResult<Prisma.$LogStripeWebhookPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LogStripeWebhook that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LogStripeWebhookFindUniqueOrThrowArgs} args - Arguments to find a LogStripeWebhook
     * @example
     * // Get one LogStripeWebhook
     * const logStripeWebhook = await prisma.logStripeWebhook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LogStripeWebhookFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LogStripeWebhookFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LogStripeWebhookClient<$Result.GetResult<Prisma.$LogStripeWebhookPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LogStripeWebhook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogStripeWebhookFindFirstArgs} args - Arguments to find a LogStripeWebhook
     * @example
     * // Get one LogStripeWebhook
     * const logStripeWebhook = await prisma.logStripeWebhook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LogStripeWebhookFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LogStripeWebhookFindFirstArgs<ExtArgs>>
    ): Prisma__LogStripeWebhookClient<$Result.GetResult<Prisma.$LogStripeWebhookPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LogStripeWebhook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogStripeWebhookFindFirstOrThrowArgs} args - Arguments to find a LogStripeWebhook
     * @example
     * // Get one LogStripeWebhook
     * const logStripeWebhook = await prisma.logStripeWebhook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LogStripeWebhookFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LogStripeWebhookFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LogStripeWebhookClient<$Result.GetResult<Prisma.$LogStripeWebhookPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LogStripeWebhooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogStripeWebhookFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogStripeWebhooks
     * const logStripeWebhooks = await prisma.logStripeWebhook.findMany()
     * 
     * // Get first 10 LogStripeWebhooks
     * const logStripeWebhooks = await prisma.logStripeWebhook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logStripeWebhookWithIdOnly = await prisma.logStripeWebhook.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LogStripeWebhookFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LogStripeWebhookFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogStripeWebhookPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LogStripeWebhook.
     * @param {LogStripeWebhookCreateArgs} args - Arguments to create a LogStripeWebhook.
     * @example
     * // Create one LogStripeWebhook
     * const LogStripeWebhook = await prisma.logStripeWebhook.create({
     *   data: {
     *     // ... data to create a LogStripeWebhook
     *   }
     * })
     * 
    **/
    create<T extends LogStripeWebhookCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LogStripeWebhookCreateArgs<ExtArgs>>
    ): Prisma__LogStripeWebhookClient<$Result.GetResult<Prisma.$LogStripeWebhookPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LogStripeWebhooks.
     *     @param {LogStripeWebhookCreateManyArgs} args - Arguments to create many LogStripeWebhooks.
     *     @example
     *     // Create many LogStripeWebhooks
     *     const logStripeWebhook = await prisma.logStripeWebhook.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LogStripeWebhookCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LogStripeWebhookCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LogStripeWebhook.
     * @param {LogStripeWebhookDeleteArgs} args - Arguments to delete one LogStripeWebhook.
     * @example
     * // Delete one LogStripeWebhook
     * const LogStripeWebhook = await prisma.logStripeWebhook.delete({
     *   where: {
     *     // ... filter to delete one LogStripeWebhook
     *   }
     * })
     * 
    **/
    delete<T extends LogStripeWebhookDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LogStripeWebhookDeleteArgs<ExtArgs>>
    ): Prisma__LogStripeWebhookClient<$Result.GetResult<Prisma.$LogStripeWebhookPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LogStripeWebhook.
     * @param {LogStripeWebhookUpdateArgs} args - Arguments to update one LogStripeWebhook.
     * @example
     * // Update one LogStripeWebhook
     * const logStripeWebhook = await prisma.logStripeWebhook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LogStripeWebhookUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LogStripeWebhookUpdateArgs<ExtArgs>>
    ): Prisma__LogStripeWebhookClient<$Result.GetResult<Prisma.$LogStripeWebhookPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LogStripeWebhooks.
     * @param {LogStripeWebhookDeleteManyArgs} args - Arguments to filter LogStripeWebhooks to delete.
     * @example
     * // Delete a few LogStripeWebhooks
     * const { count } = await prisma.logStripeWebhook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LogStripeWebhookDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LogStripeWebhookDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogStripeWebhooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogStripeWebhookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogStripeWebhooks
     * const logStripeWebhook = await prisma.logStripeWebhook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LogStripeWebhookUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LogStripeWebhookUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LogStripeWebhook.
     * @param {LogStripeWebhookUpsertArgs} args - Arguments to update or create a LogStripeWebhook.
     * @example
     * // Update or create a LogStripeWebhook
     * const logStripeWebhook = await prisma.logStripeWebhook.upsert({
     *   create: {
     *     // ... data to create a LogStripeWebhook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogStripeWebhook we want to update
     *   }
     * })
    **/
    upsert<T extends LogStripeWebhookUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LogStripeWebhookUpsertArgs<ExtArgs>>
    ): Prisma__LogStripeWebhookClient<$Result.GetResult<Prisma.$LogStripeWebhookPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LogStripeWebhooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogStripeWebhookCountArgs} args - Arguments to filter LogStripeWebhooks to count.
     * @example
     * // Count the number of LogStripeWebhooks
     * const count = await prisma.logStripeWebhook.count({
     *   where: {
     *     // ... the filter for the LogStripeWebhooks we want to count
     *   }
     * })
    **/
    count<T extends LogStripeWebhookCountArgs>(
      args?: Subset<T, LogStripeWebhookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogStripeWebhookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogStripeWebhook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogStripeWebhookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogStripeWebhookAggregateArgs>(args: Subset<T, LogStripeWebhookAggregateArgs>): Prisma.PrismaPromise<GetLogStripeWebhookAggregateType<T>>

    /**
     * Group by LogStripeWebhook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogStripeWebhookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogStripeWebhookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogStripeWebhookGroupByArgs['orderBy'] }
        : { orderBy?: LogStripeWebhookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogStripeWebhookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogStripeWebhookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogStripeWebhook model
   */
  readonly fields: LogStripeWebhookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogStripeWebhook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogStripeWebhookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LogStripeWebhook model
   */ 
  interface LogStripeWebhookFieldRefs {
    readonly id: FieldRef<"LogStripeWebhook", 'String'>
    readonly description: FieldRef<"LogStripeWebhook", 'String'>
    readonly eventType: FieldRef<"LogStripeWebhook", 'String'>
    readonly error: FieldRef<"LogStripeWebhook", 'String'>
    readonly custumerId: FieldRef<"LogStripeWebhook", 'String'>
    readonly status: FieldRef<"LogStripeWebhook", 'Boolean'>
    readonly data: FieldRef<"LogStripeWebhook", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * LogStripeWebhook findUnique
   */
  export type LogStripeWebhookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogStripeWebhook
     */
    select?: LogStripeWebhookSelect<ExtArgs> | null
    /**
     * Filter, which LogStripeWebhook to fetch.
     */
    where: LogStripeWebhookWhereUniqueInput
  }


  /**
   * LogStripeWebhook findUniqueOrThrow
   */
  export type LogStripeWebhookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogStripeWebhook
     */
    select?: LogStripeWebhookSelect<ExtArgs> | null
    /**
     * Filter, which LogStripeWebhook to fetch.
     */
    where: LogStripeWebhookWhereUniqueInput
  }


  /**
   * LogStripeWebhook findFirst
   */
  export type LogStripeWebhookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogStripeWebhook
     */
    select?: LogStripeWebhookSelect<ExtArgs> | null
    /**
     * Filter, which LogStripeWebhook to fetch.
     */
    where?: LogStripeWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogStripeWebhooks to fetch.
     */
    orderBy?: LogStripeWebhookOrderByWithRelationInput | LogStripeWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogStripeWebhooks.
     */
    cursor?: LogStripeWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogStripeWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogStripeWebhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogStripeWebhooks.
     */
    distinct?: LogStripeWebhookScalarFieldEnum | LogStripeWebhookScalarFieldEnum[]
  }


  /**
   * LogStripeWebhook findFirstOrThrow
   */
  export type LogStripeWebhookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogStripeWebhook
     */
    select?: LogStripeWebhookSelect<ExtArgs> | null
    /**
     * Filter, which LogStripeWebhook to fetch.
     */
    where?: LogStripeWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogStripeWebhooks to fetch.
     */
    orderBy?: LogStripeWebhookOrderByWithRelationInput | LogStripeWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogStripeWebhooks.
     */
    cursor?: LogStripeWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogStripeWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogStripeWebhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogStripeWebhooks.
     */
    distinct?: LogStripeWebhookScalarFieldEnum | LogStripeWebhookScalarFieldEnum[]
  }


  /**
   * LogStripeWebhook findMany
   */
  export type LogStripeWebhookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogStripeWebhook
     */
    select?: LogStripeWebhookSelect<ExtArgs> | null
    /**
     * Filter, which LogStripeWebhooks to fetch.
     */
    where?: LogStripeWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogStripeWebhooks to fetch.
     */
    orderBy?: LogStripeWebhookOrderByWithRelationInput | LogStripeWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogStripeWebhooks.
     */
    cursor?: LogStripeWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogStripeWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogStripeWebhooks.
     */
    skip?: number
    distinct?: LogStripeWebhookScalarFieldEnum | LogStripeWebhookScalarFieldEnum[]
  }


  /**
   * LogStripeWebhook create
   */
  export type LogStripeWebhookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogStripeWebhook
     */
    select?: LogStripeWebhookSelect<ExtArgs> | null
    /**
     * The data needed to create a LogStripeWebhook.
     */
    data?: XOR<LogStripeWebhookCreateInput, LogStripeWebhookUncheckedCreateInput>
  }


  /**
   * LogStripeWebhook createMany
   */
  export type LogStripeWebhookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogStripeWebhooks.
     */
    data: LogStripeWebhookCreateManyInput | LogStripeWebhookCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * LogStripeWebhook update
   */
  export type LogStripeWebhookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogStripeWebhook
     */
    select?: LogStripeWebhookSelect<ExtArgs> | null
    /**
     * The data needed to update a LogStripeWebhook.
     */
    data: XOR<LogStripeWebhookUpdateInput, LogStripeWebhookUncheckedUpdateInput>
    /**
     * Choose, which LogStripeWebhook to update.
     */
    where: LogStripeWebhookWhereUniqueInput
  }


  /**
   * LogStripeWebhook updateMany
   */
  export type LogStripeWebhookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogStripeWebhooks.
     */
    data: XOR<LogStripeWebhookUpdateManyMutationInput, LogStripeWebhookUncheckedUpdateManyInput>
    /**
     * Filter which LogStripeWebhooks to update
     */
    where?: LogStripeWebhookWhereInput
  }


  /**
   * LogStripeWebhook upsert
   */
  export type LogStripeWebhookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogStripeWebhook
     */
    select?: LogStripeWebhookSelect<ExtArgs> | null
    /**
     * The filter to search for the LogStripeWebhook to update in case it exists.
     */
    where: LogStripeWebhookWhereUniqueInput
    /**
     * In case the LogStripeWebhook found by the `where` argument doesn't exist, create a new LogStripeWebhook with this data.
     */
    create: XOR<LogStripeWebhookCreateInput, LogStripeWebhookUncheckedCreateInput>
    /**
     * In case the LogStripeWebhook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogStripeWebhookUpdateInput, LogStripeWebhookUncheckedUpdateInput>
  }


  /**
   * LogStripeWebhook delete
   */
  export type LogStripeWebhookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogStripeWebhook
     */
    select?: LogStripeWebhookSelect<ExtArgs> | null
    /**
     * Filter which LogStripeWebhook to delete.
     */
    where: LogStripeWebhookWhereUniqueInput
  }


  /**
   * LogStripeWebhook deleteMany
   */
  export type LogStripeWebhookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogStripeWebhooks to delete
     */
    where?: LogStripeWebhookWhereInput
  }


  /**
   * LogStripeWebhook without action
   */
  export type LogStripeWebhookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogStripeWebhook
     */
    select?: LogStripeWebhookSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    priceId: 'priceId',
    description: 'description'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    cpf: 'cpf',
    emailVerified: 'emailVerified',
    image: 'image',
    planId: 'planId',
    custumerId: 'custumerId',
    isTwoFactorEnabled: 'isTwoFactorEnabled'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const PasswordResetTokenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    expires: 'expires'
  };

  export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum]


  export const TwoFactorTokenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    expires: 'expires'
  };

  export type TwoFactorTokenScalarFieldEnum = (typeof TwoFactorTokenScalarFieldEnum)[keyof typeof TwoFactorTokenScalarFieldEnum]


  export const TwoFactorConfirmationScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type TwoFactorConfirmationScalarFieldEnum = (typeof TwoFactorConfirmationScalarFieldEnum)[keyof typeof TwoFactorConfirmationScalarFieldEnum]


  export const CollectionScalarFieldEnum: {
    id: 'id',
    description: 'description'
  };

  export type CollectionScalarFieldEnum = (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum]


  export const TypeModelScalarFieldEnum: {
    id: 'id',
    description: 'description'
  };

  export type TypeModelScalarFieldEnum = (typeof TypeModelScalarFieldEnum)[keyof typeof TypeModelScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    model: 'model',
    series: 'series',
    seriesNum: 'seriesNum',
    year: 'year',
    status: 'status',
    image: 'image',
    createdAt: 'createdAt',
    userId: 'userId',
    typeModelId: 'typeModelId',
    collectionId: 'collectionId'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const ItemImageScalarFieldEnum: {
    id: 'id',
    itemId: 'itemId',
    fileName: 'fileName',
    link: 'link',
    principal: 'principal',
    createdAt: 'createdAt',
    status: 'status'
  };

  export type ItemImageScalarFieldEnum = (typeof ItemImageScalarFieldEnum)[keyof typeof ItemImageScalarFieldEnum]


  export const UserCollectionScalarFieldEnum: {
    id: 'id',
    description: 'description',
    name: 'name',
    userId: 'userId',
    collectionId: 'collectionId',
    createdAt: 'createdAt',
    status: 'status',
    fatherId: 'fatherId'
  };

  export type UserCollectionScalarFieldEnum = (typeof UserCollectionScalarFieldEnum)[keyof typeof UserCollectionScalarFieldEnum]


  export const UserItemScalarFieldEnum: {
    createdAt: 'createdAt',
    description: 'description',
    scale: 'scale',
    name: 'name',
    itemId: 'itemId',
    userCollectionId: 'userCollectionId'
  };

  export type UserItemScalarFieldEnum = (typeof UserItemScalarFieldEnum)[keyof typeof UserItemScalarFieldEnum]


  export const UserItemImageScalarFieldEnum: {
    id: 'id',
    itemId: 'itemId',
    userCollectionId: 'userCollectionId',
    link: 'link',
    fileName: 'fileName',
    principal: 'principal',
    createdAt: 'createdAt',
    status: 'status'
  };

  export type UserItemImageScalarFieldEnum = (typeof UserItemImageScalarFieldEnum)[keyof typeof UserItemImageScalarFieldEnum]


  export const LogStripeWebhookScalarFieldEnum: {
    id: 'id',
    description: 'description',
    eventType: 'eventType',
    error: 'error',
    custumerId: 'custumerId',
    status: 'status',
    data: 'data'
  };

  export type LogStripeWebhookScalarFieldEnum = (typeof LogStripeWebhookScalarFieldEnum)[keyof typeof LogStripeWebhookScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: StringFilter<"Plan"> | string
    priceId?: StringFilter<"Plan"> | string
    description?: StringFilter<"Plan"> | string
    users?: UserListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    priceId?: SortOrder
    description?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    priceId?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    description?: StringFilter<"Plan"> | string
    users?: UserListRelationFilter
  }, "id" | "priceId">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    priceId?: SortOrder
    description?: SortOrder
    _count?: PlanCountOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plan"> | string
    priceId?: StringWithAggregatesFilter<"Plan"> | string
    description?: StringWithAggregatesFilter<"Plan"> | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    cpf?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    planId?: StringNullableFilter<"User"> | string | null
    custumerId?: StringNullableFilter<"User"> | string | null
    isTwoFactorEnabled?: BoolFilter<"User"> | boolean
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    userCollections?: UserCollectionListRelationFilter
    items?: ItemListRelationFilter
    twoFactorConfirmation?: XOR<TwoFactorConfirmationNullableRelationFilter, TwoFactorConfirmationWhereInput> | null
    plan?: XOR<PlanNullableRelationFilter, PlanWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    planId?: SortOrderInput | SortOrder
    custumerId?: SortOrderInput | SortOrder
    isTwoFactorEnabled?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    userCollections?: UserCollectionOrderByRelationAggregateInput
    items?: ItemOrderByRelationAggregateInput
    twoFactorConfirmation?: TwoFactorConfirmationOrderByWithRelationInput
    plan?: PlanOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    cpf?: string
    custumerId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    planId?: StringNullableFilter<"User"> | string | null
    isTwoFactorEnabled?: BoolFilter<"User"> | boolean
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    userCollections?: UserCollectionListRelationFilter
    items?: ItemListRelationFilter
    twoFactorConfirmation?: XOR<TwoFactorConfirmationNullableRelationFilter, TwoFactorConfirmationWhereInput> | null
    plan?: XOR<PlanNullableRelationFilter, PlanWhereInput> | null
  }, "id" | "email" | "phone" | "cpf" | "custumerId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    planId?: SortOrderInput | SortOrder
    custumerId?: SortOrderInput | SortOrder
    isTwoFactorEnabled?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    cpf?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    planId?: StringNullableWithAggregatesFilter<"User"> | string | null
    custumerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    isTwoFactorEnabled?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type PasswordResetTokenWhereInput = {
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    id?: StringFilter<"PasswordResetToken"> | string
    email?: StringFilter<"PasswordResetToken"> | string
    token?: StringFilter<"PasswordResetToken"> | string
    expires?: DateTimeFilter<"PasswordResetToken"> | Date | string
  }

  export type PasswordResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type PasswordResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    email_token?: PasswordResetTokenEmailTokenCompoundUniqueInput
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    email?: StringFilter<"PasswordResetToken"> | string
    expires?: DateTimeFilter<"PasswordResetToken"> | Date | string
  }, "id" | "token" | "email_token">

  export type PasswordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: PasswordResetTokenCountOrderByAggregateInput
    _max?: PasswordResetTokenMaxOrderByAggregateInput
    _min?: PasswordResetTokenMinOrderByAggregateInput
  }

  export type PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    OR?: PasswordResetTokenScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    email?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    token?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    expires?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
  }

  export type TwoFactorTokenWhereInput = {
    AND?: TwoFactorTokenWhereInput | TwoFactorTokenWhereInput[]
    OR?: TwoFactorTokenWhereInput[]
    NOT?: TwoFactorTokenWhereInput | TwoFactorTokenWhereInput[]
    id?: StringFilter<"TwoFactorToken"> | string
    email?: StringFilter<"TwoFactorToken"> | string
    token?: StringFilter<"TwoFactorToken"> | string
    expires?: DateTimeFilter<"TwoFactorToken"> | Date | string
  }

  export type TwoFactorTokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type TwoFactorTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    email_token?: TwoFactorTokenEmailTokenCompoundUniqueInput
    AND?: TwoFactorTokenWhereInput | TwoFactorTokenWhereInput[]
    OR?: TwoFactorTokenWhereInput[]
    NOT?: TwoFactorTokenWhereInput | TwoFactorTokenWhereInput[]
    email?: StringFilter<"TwoFactorToken"> | string
    expires?: DateTimeFilter<"TwoFactorToken"> | Date | string
  }, "id" | "token" | "email_token">

  export type TwoFactorTokenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: TwoFactorTokenCountOrderByAggregateInput
    _max?: TwoFactorTokenMaxOrderByAggregateInput
    _min?: TwoFactorTokenMinOrderByAggregateInput
  }

  export type TwoFactorTokenScalarWhereWithAggregatesInput = {
    AND?: TwoFactorTokenScalarWhereWithAggregatesInput | TwoFactorTokenScalarWhereWithAggregatesInput[]
    OR?: TwoFactorTokenScalarWhereWithAggregatesInput[]
    NOT?: TwoFactorTokenScalarWhereWithAggregatesInput | TwoFactorTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TwoFactorToken"> | string
    email?: StringWithAggregatesFilter<"TwoFactorToken"> | string
    token?: StringWithAggregatesFilter<"TwoFactorToken"> | string
    expires?: DateTimeWithAggregatesFilter<"TwoFactorToken"> | Date | string
  }

  export type TwoFactorConfirmationWhereInput = {
    AND?: TwoFactorConfirmationWhereInput | TwoFactorConfirmationWhereInput[]
    OR?: TwoFactorConfirmationWhereInput[]
    NOT?: TwoFactorConfirmationWhereInput | TwoFactorConfirmationWhereInput[]
    id?: StringFilter<"TwoFactorConfirmation"> | string
    userId?: StringFilter<"TwoFactorConfirmation"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TwoFactorConfirmationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TwoFactorConfirmationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: TwoFactorConfirmationWhereInput | TwoFactorConfirmationWhereInput[]
    OR?: TwoFactorConfirmationWhereInput[]
    NOT?: TwoFactorConfirmationWhereInput | TwoFactorConfirmationWhereInput[]
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type TwoFactorConfirmationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: TwoFactorConfirmationCountOrderByAggregateInput
    _max?: TwoFactorConfirmationMaxOrderByAggregateInput
    _min?: TwoFactorConfirmationMinOrderByAggregateInput
  }

  export type TwoFactorConfirmationScalarWhereWithAggregatesInput = {
    AND?: TwoFactorConfirmationScalarWhereWithAggregatesInput | TwoFactorConfirmationScalarWhereWithAggregatesInput[]
    OR?: TwoFactorConfirmationScalarWhereWithAggregatesInput[]
    NOT?: TwoFactorConfirmationScalarWhereWithAggregatesInput | TwoFactorConfirmationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TwoFactorConfirmation"> | string
    userId?: StringWithAggregatesFilter<"TwoFactorConfirmation"> | string
  }

  export type CollectionWhereInput = {
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    id?: IntFilter<"Collection"> | number
    description?: StringFilter<"Collection"> | string
    collections?: UserCollectionListRelationFilter
    items?: ItemListRelationFilter
  }

  export type CollectionOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    collections?: UserCollectionOrderByRelationAggregateInput
    items?: ItemOrderByRelationAggregateInput
  }

  export type CollectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    description?: string
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    collections?: UserCollectionListRelationFilter
    items?: ItemListRelationFilter
  }, "id" | "description">

  export type CollectionOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    _count?: CollectionCountOrderByAggregateInput
    _avg?: CollectionAvgOrderByAggregateInput
    _max?: CollectionMaxOrderByAggregateInput
    _min?: CollectionMinOrderByAggregateInput
    _sum?: CollectionSumOrderByAggregateInput
  }

  export type CollectionScalarWhereWithAggregatesInput = {
    AND?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    OR?: CollectionScalarWhereWithAggregatesInput[]
    NOT?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Collection"> | number
    description?: StringWithAggregatesFilter<"Collection"> | string
  }

  export type TypeModelWhereInput = {
    AND?: TypeModelWhereInput | TypeModelWhereInput[]
    OR?: TypeModelWhereInput[]
    NOT?: TypeModelWhereInput | TypeModelWhereInput[]
    id?: IntFilter<"TypeModel"> | number
    description?: StringFilter<"TypeModel"> | string
    items?: ItemListRelationFilter
  }

  export type TypeModelOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    items?: ItemOrderByRelationAggregateInput
  }

  export type TypeModelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    description?: string
    AND?: TypeModelWhereInput | TypeModelWhereInput[]
    OR?: TypeModelWhereInput[]
    NOT?: TypeModelWhereInput | TypeModelWhereInput[]
    items?: ItemListRelationFilter
  }, "id" | "description">

  export type TypeModelOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    _count?: TypeModelCountOrderByAggregateInput
    _avg?: TypeModelAvgOrderByAggregateInput
    _max?: TypeModelMaxOrderByAggregateInput
    _min?: TypeModelMinOrderByAggregateInput
    _sum?: TypeModelSumOrderByAggregateInput
  }

  export type TypeModelScalarWhereWithAggregatesInput = {
    AND?: TypeModelScalarWhereWithAggregatesInput | TypeModelScalarWhereWithAggregatesInput[]
    OR?: TypeModelScalarWhereWithAggregatesInput[]
    NOT?: TypeModelScalarWhereWithAggregatesInput | TypeModelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TypeModel"> | number
    description?: StringWithAggregatesFilter<"TypeModel"> | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: StringFilter<"Item"> | string
    model?: StringFilter<"Item"> | string
    series?: StringNullableFilter<"Item"> | string | null
    seriesNum?: StringNullableFilter<"Item"> | string | null
    year?: StringFilter<"Item"> | string
    status?: BoolFilter<"Item"> | boolean
    image?: StringNullableFilter<"Item"> | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    userId?: StringNullableFilter<"Item"> | string | null
    typeModelId?: IntFilter<"Item"> | number
    collectionId?: IntNullableFilter<"Item"> | number | null
    collection?: XOR<CollectionNullableRelationFilter, CollectionWhereInput> | null
    typeModel?: XOR<TypeModelRelationFilter, TypeModelWhereInput>
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    itemImages?: ItemImageListRelationFilter
    userItem?: UserItemListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    model?: SortOrder
    series?: SortOrderInput | SortOrder
    seriesNum?: SortOrderInput | SortOrder
    year?: SortOrder
    status?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    typeModelId?: SortOrder
    collectionId?: SortOrderInput | SortOrder
    collection?: CollectionOrderByWithRelationInput
    typeModel?: TypeModelOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    itemImages?: ItemImageOrderByRelationAggregateInput
    userItem?: UserItemOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    model?: StringFilter<"Item"> | string
    series?: StringNullableFilter<"Item"> | string | null
    seriesNum?: StringNullableFilter<"Item"> | string | null
    year?: StringFilter<"Item"> | string
    status?: BoolFilter<"Item"> | boolean
    image?: StringNullableFilter<"Item"> | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    userId?: StringNullableFilter<"Item"> | string | null
    typeModelId?: IntFilter<"Item"> | number
    collectionId?: IntNullableFilter<"Item"> | number | null
    collection?: XOR<CollectionNullableRelationFilter, CollectionWhereInput> | null
    typeModel?: XOR<TypeModelRelationFilter, TypeModelWhereInput>
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    itemImages?: ItemImageListRelationFilter
    userItem?: UserItemListRelationFilter
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    model?: SortOrder
    series?: SortOrderInput | SortOrder
    seriesNum?: SortOrderInput | SortOrder
    year?: SortOrder
    status?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    typeModelId?: SortOrder
    collectionId?: SortOrderInput | SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Item"> | string
    model?: StringWithAggregatesFilter<"Item"> | string
    series?: StringNullableWithAggregatesFilter<"Item"> | string | null
    seriesNum?: StringNullableWithAggregatesFilter<"Item"> | string | null
    year?: StringWithAggregatesFilter<"Item"> | string
    status?: BoolWithAggregatesFilter<"Item"> | boolean
    image?: StringNullableWithAggregatesFilter<"Item"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Item"> | string | null
    typeModelId?: IntWithAggregatesFilter<"Item"> | number
    collectionId?: IntNullableWithAggregatesFilter<"Item"> | number | null
  }

  export type ItemImageWhereInput = {
    AND?: ItemImageWhereInput | ItemImageWhereInput[]
    OR?: ItemImageWhereInput[]
    NOT?: ItemImageWhereInput | ItemImageWhereInput[]
    id?: StringFilter<"ItemImage"> | string
    itemId?: StringFilter<"ItemImage"> | string
    fileName?: StringFilter<"ItemImage"> | string
    link?: StringFilter<"ItemImage"> | string
    principal?: BoolFilter<"ItemImage"> | boolean
    createdAt?: DateTimeFilter<"ItemImage"> | Date | string
    status?: BoolFilter<"ItemImage"> | boolean
    item?: XOR<ItemRelationFilter, ItemWhereInput>
  }

  export type ItemImageOrderByWithRelationInput = {
    id?: SortOrder
    itemId?: SortOrder
    fileName?: SortOrder
    link?: SortOrder
    principal?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    item?: ItemOrderByWithRelationInput
  }

  export type ItemImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemImageWhereInput | ItemImageWhereInput[]
    OR?: ItemImageWhereInput[]
    NOT?: ItemImageWhereInput | ItemImageWhereInput[]
    itemId?: StringFilter<"ItemImage"> | string
    fileName?: StringFilter<"ItemImage"> | string
    link?: StringFilter<"ItemImage"> | string
    principal?: BoolFilter<"ItemImage"> | boolean
    createdAt?: DateTimeFilter<"ItemImage"> | Date | string
    status?: BoolFilter<"ItemImage"> | boolean
    item?: XOR<ItemRelationFilter, ItemWhereInput>
  }, "id">

  export type ItemImageOrderByWithAggregationInput = {
    id?: SortOrder
    itemId?: SortOrder
    fileName?: SortOrder
    link?: SortOrder
    principal?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    _count?: ItemImageCountOrderByAggregateInput
    _max?: ItemImageMaxOrderByAggregateInput
    _min?: ItemImageMinOrderByAggregateInput
  }

  export type ItemImageScalarWhereWithAggregatesInput = {
    AND?: ItemImageScalarWhereWithAggregatesInput | ItemImageScalarWhereWithAggregatesInput[]
    OR?: ItemImageScalarWhereWithAggregatesInput[]
    NOT?: ItemImageScalarWhereWithAggregatesInput | ItemImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ItemImage"> | string
    itemId?: StringWithAggregatesFilter<"ItemImage"> | string
    fileName?: StringWithAggregatesFilter<"ItemImage"> | string
    link?: StringWithAggregatesFilter<"ItemImage"> | string
    principal?: BoolWithAggregatesFilter<"ItemImage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ItemImage"> | Date | string
    status?: BoolWithAggregatesFilter<"ItemImage"> | boolean
  }

  export type UserCollectionWhereInput = {
    AND?: UserCollectionWhereInput | UserCollectionWhereInput[]
    OR?: UserCollectionWhereInput[]
    NOT?: UserCollectionWhereInput | UserCollectionWhereInput[]
    id?: StringFilter<"UserCollection"> | string
    description?: StringNullableFilter<"UserCollection"> | string | null
    name?: StringFilter<"UserCollection"> | string
    userId?: StringFilter<"UserCollection"> | string
    collectionId?: IntNullableFilter<"UserCollection"> | number | null
    createdAt?: DateTimeFilter<"UserCollection"> | Date | string
    status?: BoolFilter<"UserCollection"> | boolean
    fatherId?: StringNullableFilter<"UserCollection"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    collection?: XOR<CollectionNullableRelationFilter, CollectionWhereInput> | null
    parent?: XOR<UserCollectionNullableRelationFilter, UserCollectionWhereInput> | null
    childCollections?: UserCollectionListRelationFilter
    items?: UserItemListRelationFilter
  }

  export type UserCollectionOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    name?: SortOrder
    userId?: SortOrder
    collectionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    fatherId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    collection?: CollectionOrderByWithRelationInput
    parent?: UserCollectionOrderByWithRelationInput
    childCollections?: UserCollectionOrderByRelationAggregateInput
    items?: UserItemOrderByRelationAggregateInput
  }

  export type UserCollectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserCollectionWhereInput | UserCollectionWhereInput[]
    OR?: UserCollectionWhereInput[]
    NOT?: UserCollectionWhereInput | UserCollectionWhereInput[]
    description?: StringNullableFilter<"UserCollection"> | string | null
    name?: StringFilter<"UserCollection"> | string
    userId?: StringFilter<"UserCollection"> | string
    collectionId?: IntNullableFilter<"UserCollection"> | number | null
    createdAt?: DateTimeFilter<"UserCollection"> | Date | string
    status?: BoolFilter<"UserCollection"> | boolean
    fatherId?: StringNullableFilter<"UserCollection"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    collection?: XOR<CollectionNullableRelationFilter, CollectionWhereInput> | null
    parent?: XOR<UserCollectionNullableRelationFilter, UserCollectionWhereInput> | null
    childCollections?: UserCollectionListRelationFilter
    items?: UserItemListRelationFilter
  }, "id">

  export type UserCollectionOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    name?: SortOrder
    userId?: SortOrder
    collectionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    fatherId?: SortOrderInput | SortOrder
    _count?: UserCollectionCountOrderByAggregateInput
    _avg?: UserCollectionAvgOrderByAggregateInput
    _max?: UserCollectionMaxOrderByAggregateInput
    _min?: UserCollectionMinOrderByAggregateInput
    _sum?: UserCollectionSumOrderByAggregateInput
  }

  export type UserCollectionScalarWhereWithAggregatesInput = {
    AND?: UserCollectionScalarWhereWithAggregatesInput | UserCollectionScalarWhereWithAggregatesInput[]
    OR?: UserCollectionScalarWhereWithAggregatesInput[]
    NOT?: UserCollectionScalarWhereWithAggregatesInput | UserCollectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserCollection"> | string
    description?: StringNullableWithAggregatesFilter<"UserCollection"> | string | null
    name?: StringWithAggregatesFilter<"UserCollection"> | string
    userId?: StringWithAggregatesFilter<"UserCollection"> | string
    collectionId?: IntNullableWithAggregatesFilter<"UserCollection"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"UserCollection"> | Date | string
    status?: BoolWithAggregatesFilter<"UserCollection"> | boolean
    fatherId?: StringNullableWithAggregatesFilter<"UserCollection"> | string | null
  }

  export type UserItemWhereInput = {
    AND?: UserItemWhereInput | UserItemWhereInput[]
    OR?: UserItemWhereInput[]
    NOT?: UserItemWhereInput | UserItemWhereInput[]
    createdAt?: DateTimeFilter<"UserItem"> | Date | string
    description?: StringNullableFilter<"UserItem"> | string | null
    scale?: StringNullableFilter<"UserItem"> | string | null
    name?: StringNullableFilter<"UserItem"> | string | null
    itemId?: StringFilter<"UserItem"> | string
    userCollectionId?: StringFilter<"UserItem"> | string
    userCollection?: XOR<UserCollectionNullableRelationFilter, UserCollectionWhereInput> | null
    item?: XOR<ItemNullableRelationFilter, ItemWhereInput> | null
    itemImages?: UserItemImageListRelationFilter
  }

  export type UserItemOrderByWithRelationInput = {
    createdAt?: SortOrder
    description?: SortOrderInput | SortOrder
    scale?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    itemId?: SortOrder
    userCollectionId?: SortOrder
    userCollection?: UserCollectionOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
    itemImages?: UserItemImageOrderByRelationAggregateInput
  }

  export type UserItemWhereUniqueInput = Prisma.AtLeast<{
    itemId_userCollectionId?: UserItemItemIdUserCollectionIdCompoundUniqueInput
    AND?: UserItemWhereInput | UserItemWhereInput[]
    OR?: UserItemWhereInput[]
    NOT?: UserItemWhereInput | UserItemWhereInput[]
    createdAt?: DateTimeFilter<"UserItem"> | Date | string
    description?: StringNullableFilter<"UserItem"> | string | null
    scale?: StringNullableFilter<"UserItem"> | string | null
    name?: StringNullableFilter<"UserItem"> | string | null
    itemId?: StringFilter<"UserItem"> | string
    userCollectionId?: StringFilter<"UserItem"> | string
    userCollection?: XOR<UserCollectionNullableRelationFilter, UserCollectionWhereInput> | null
    item?: XOR<ItemNullableRelationFilter, ItemWhereInput> | null
    itemImages?: UserItemImageListRelationFilter
  }, "itemId_userCollectionId">

  export type UserItemOrderByWithAggregationInput = {
    createdAt?: SortOrder
    description?: SortOrderInput | SortOrder
    scale?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    itemId?: SortOrder
    userCollectionId?: SortOrder
    _count?: UserItemCountOrderByAggregateInput
    _max?: UserItemMaxOrderByAggregateInput
    _min?: UserItemMinOrderByAggregateInput
  }

  export type UserItemScalarWhereWithAggregatesInput = {
    AND?: UserItemScalarWhereWithAggregatesInput | UserItemScalarWhereWithAggregatesInput[]
    OR?: UserItemScalarWhereWithAggregatesInput[]
    NOT?: UserItemScalarWhereWithAggregatesInput | UserItemScalarWhereWithAggregatesInput[]
    createdAt?: DateTimeWithAggregatesFilter<"UserItem"> | Date | string
    description?: StringNullableWithAggregatesFilter<"UserItem"> | string | null
    scale?: StringNullableWithAggregatesFilter<"UserItem"> | string | null
    name?: StringNullableWithAggregatesFilter<"UserItem"> | string | null
    itemId?: StringWithAggregatesFilter<"UserItem"> | string
    userCollectionId?: StringWithAggregatesFilter<"UserItem"> | string
  }

  export type UserItemImageWhereInput = {
    AND?: UserItemImageWhereInput | UserItemImageWhereInput[]
    OR?: UserItemImageWhereInput[]
    NOT?: UserItemImageWhereInput | UserItemImageWhereInput[]
    id?: StringFilter<"UserItemImage"> | string
    itemId?: StringFilter<"UserItemImage"> | string
    userCollectionId?: StringFilter<"UserItemImage"> | string
    link?: StringFilter<"UserItemImage"> | string
    fileName?: StringFilter<"UserItemImage"> | string
    principal?: BoolFilter<"UserItemImage"> | boolean
    createdAt?: DateTimeFilter<"UserItemImage"> | Date | string
    status?: BoolFilter<"UserItemImage"> | boolean
    userItem?: XOR<UserItemRelationFilter, UserItemWhereInput>
  }

  export type UserItemImageOrderByWithRelationInput = {
    id?: SortOrder
    itemId?: SortOrder
    userCollectionId?: SortOrder
    link?: SortOrder
    fileName?: SortOrder
    principal?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    userItem?: UserItemOrderByWithRelationInput
  }

  export type UserItemImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserItemImageWhereInput | UserItemImageWhereInput[]
    OR?: UserItemImageWhereInput[]
    NOT?: UserItemImageWhereInput | UserItemImageWhereInput[]
    itemId?: StringFilter<"UserItemImage"> | string
    userCollectionId?: StringFilter<"UserItemImage"> | string
    link?: StringFilter<"UserItemImage"> | string
    fileName?: StringFilter<"UserItemImage"> | string
    principal?: BoolFilter<"UserItemImage"> | boolean
    createdAt?: DateTimeFilter<"UserItemImage"> | Date | string
    status?: BoolFilter<"UserItemImage"> | boolean
    userItem?: XOR<UserItemRelationFilter, UserItemWhereInput>
  }, "id">

  export type UserItemImageOrderByWithAggregationInput = {
    id?: SortOrder
    itemId?: SortOrder
    userCollectionId?: SortOrder
    link?: SortOrder
    fileName?: SortOrder
    principal?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    _count?: UserItemImageCountOrderByAggregateInput
    _max?: UserItemImageMaxOrderByAggregateInput
    _min?: UserItemImageMinOrderByAggregateInput
  }

  export type UserItemImageScalarWhereWithAggregatesInput = {
    AND?: UserItemImageScalarWhereWithAggregatesInput | UserItemImageScalarWhereWithAggregatesInput[]
    OR?: UserItemImageScalarWhereWithAggregatesInput[]
    NOT?: UserItemImageScalarWhereWithAggregatesInput | UserItemImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserItemImage"> | string
    itemId?: StringWithAggregatesFilter<"UserItemImage"> | string
    userCollectionId?: StringWithAggregatesFilter<"UserItemImage"> | string
    link?: StringWithAggregatesFilter<"UserItemImage"> | string
    fileName?: StringWithAggregatesFilter<"UserItemImage"> | string
    principal?: BoolWithAggregatesFilter<"UserItemImage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserItemImage"> | Date | string
    status?: BoolWithAggregatesFilter<"UserItemImage"> | boolean
  }

  export type LogStripeWebhookWhereInput = {
    AND?: LogStripeWebhookWhereInput | LogStripeWebhookWhereInput[]
    OR?: LogStripeWebhookWhereInput[]
    NOT?: LogStripeWebhookWhereInput | LogStripeWebhookWhereInput[]
    id?: StringFilter<"LogStripeWebhook"> | string
    description?: StringNullableFilter<"LogStripeWebhook"> | string | null
    eventType?: StringNullableFilter<"LogStripeWebhook"> | string | null
    error?: StringNullableFilter<"LogStripeWebhook"> | string | null
    custumerId?: StringNullableFilter<"LogStripeWebhook"> | string | null
    status?: BoolFilter<"LogStripeWebhook"> | boolean
    data?: DateTimeFilter<"LogStripeWebhook"> | Date | string
  }

  export type LogStripeWebhookOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    eventType?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    custumerId?: SortOrderInput | SortOrder
    status?: SortOrder
    data?: SortOrder
  }

  export type LogStripeWebhookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogStripeWebhookWhereInput | LogStripeWebhookWhereInput[]
    OR?: LogStripeWebhookWhereInput[]
    NOT?: LogStripeWebhookWhereInput | LogStripeWebhookWhereInput[]
    description?: StringNullableFilter<"LogStripeWebhook"> | string | null
    eventType?: StringNullableFilter<"LogStripeWebhook"> | string | null
    error?: StringNullableFilter<"LogStripeWebhook"> | string | null
    custumerId?: StringNullableFilter<"LogStripeWebhook"> | string | null
    status?: BoolFilter<"LogStripeWebhook"> | boolean
    data?: DateTimeFilter<"LogStripeWebhook"> | Date | string
  }, "id">

  export type LogStripeWebhookOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    eventType?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    custumerId?: SortOrderInput | SortOrder
    status?: SortOrder
    data?: SortOrder
    _count?: LogStripeWebhookCountOrderByAggregateInput
    _max?: LogStripeWebhookMaxOrderByAggregateInput
    _min?: LogStripeWebhookMinOrderByAggregateInput
  }

  export type LogStripeWebhookScalarWhereWithAggregatesInput = {
    AND?: LogStripeWebhookScalarWhereWithAggregatesInput | LogStripeWebhookScalarWhereWithAggregatesInput[]
    OR?: LogStripeWebhookScalarWhereWithAggregatesInput[]
    NOT?: LogStripeWebhookScalarWhereWithAggregatesInput | LogStripeWebhookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LogStripeWebhook"> | string
    description?: StringNullableWithAggregatesFilter<"LogStripeWebhook"> | string | null
    eventType?: StringNullableWithAggregatesFilter<"LogStripeWebhook"> | string | null
    error?: StringNullableWithAggregatesFilter<"LogStripeWebhook"> | string | null
    custumerId?: StringNullableWithAggregatesFilter<"LogStripeWebhook"> | string | null
    status?: BoolWithAggregatesFilter<"LogStripeWebhook"> | boolean
    data?: DateTimeWithAggregatesFilter<"LogStripeWebhook"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlanCreateInput = {
    id: string
    priceId: string
    description: string
    users?: UserCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateInput = {
    id: string
    priceId: string
    description: string
    users?: UserUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateManyInput = {
    id: string
    priceId: string
    description: string
  }

  export type PlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    cpf?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    custumerId?: string | null
    isTwoFactorEnabled?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    userCollections?: UserCollectionCreateNestedManyWithoutUserInput
    items?: ItemCreateNestedManyWithoutUserInput
    twoFactorConfirmation?: TwoFactorConfirmationCreateNestedOneWithoutUserInput
    plan?: PlanCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    cpf?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    planId?: string | null
    custumerId?: string | null
    isTwoFactorEnabled?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    userCollections?: UserCollectionUncheckedCreateNestedManyWithoutUserInput
    items?: ItemUncheckedCreateNestedManyWithoutUserInput
    twoFactorConfirmation?: TwoFactorConfirmationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    custumerId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    userCollections?: UserCollectionUpdateManyWithoutUserNestedInput
    items?: ItemUpdateManyWithoutUserNestedInput
    twoFactorConfirmation?: TwoFactorConfirmationUpdateOneWithoutUserNestedInput
    plan?: PlanUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    custumerId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    userCollections?: UserCollectionUncheckedUpdateManyWithoutUserNestedInput
    items?: ItemUncheckedUpdateManyWithoutUserNestedInput
    twoFactorConfirmation?: TwoFactorConfirmationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    cpf?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    planId?: string | null
    custumerId?: string | null
    isTwoFactorEnabled?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    custumerId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    custumerId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
  }

  export type PasswordResetTokenUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
  }

  export type PasswordResetTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateManyInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
  }

  export type PasswordResetTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwoFactorTokenCreateInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
  }

  export type TwoFactorTokenUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
  }

  export type TwoFactorTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwoFactorTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwoFactorTokenCreateManyInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
  }

  export type TwoFactorTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwoFactorTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwoFactorConfirmationCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutTwoFactorConfirmationInput
  }

  export type TwoFactorConfirmationUncheckedCreateInput = {
    id?: string
    userId: string
  }

  export type TwoFactorConfirmationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTwoFactorConfirmationNestedInput
  }

  export type TwoFactorConfirmationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TwoFactorConfirmationCreateManyInput = {
    id?: string
    userId: string
  }

  export type TwoFactorConfirmationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TwoFactorConfirmationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CollectionCreateInput = {
    id: number
    description: string
    collections?: UserCollectionCreateNestedManyWithoutCollectionInput
    items?: ItemCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateInput = {
    id: number
    description: string
    collections?: UserCollectionUncheckedCreateNestedManyWithoutCollectionInput
    items?: ItemUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    collections?: UserCollectionUpdateManyWithoutCollectionNestedInput
    items?: ItemUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    collections?: UserCollectionUncheckedUpdateManyWithoutCollectionNestedInput
    items?: ItemUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionCreateManyInput = {
    id: number
    description: string
  }

  export type CollectionUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CollectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TypeModelCreateInput = {
    id: number
    description: string
    items?: ItemCreateNestedManyWithoutTypeModelInput
  }

  export type TypeModelUncheckedCreateInput = {
    id: number
    description: string
    items?: ItemUncheckedCreateNestedManyWithoutTypeModelInput
  }

  export type TypeModelUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    items?: ItemUpdateManyWithoutTypeModelNestedInput
  }

  export type TypeModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    items?: ItemUncheckedUpdateManyWithoutTypeModelNestedInput
  }

  export type TypeModelCreateManyInput = {
    id: number
    description: string
  }

  export type TypeModelUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TypeModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ItemCreateInput = {
    id: string
    model: string
    series?: string | null
    seriesNum?: string | null
    year: string
    status?: boolean
    image?: string | null
    createdAt?: Date | string
    collection?: CollectionCreateNestedOneWithoutItemsInput
    typeModel: TypeModelCreateNestedOneWithoutItemsInput
    user?: UserCreateNestedOneWithoutItemsInput
    itemImages?: ItemImageCreateNestedManyWithoutItemInput
    userItem?: UserItemCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id: string
    model: string
    series?: string | null
    seriesNum?: string | null
    year: string
    status?: boolean
    image?: string | null
    createdAt?: Date | string
    userId?: string | null
    typeModelId: number
    collectionId?: number | null
    itemImages?: ItemImageUncheckedCreateNestedManyWithoutItemInput
    userItem?: UserItemUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    series?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNum?: NullableStringFieldUpdateOperationsInput | string | null
    year?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: CollectionUpdateOneWithoutItemsNestedInput
    typeModel?: TypeModelUpdateOneRequiredWithoutItemsNestedInput
    user?: UserUpdateOneWithoutItemsNestedInput
    itemImages?: ItemImageUpdateManyWithoutItemNestedInput
    userItem?: UserItemUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    series?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNum?: NullableStringFieldUpdateOperationsInput | string | null
    year?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    typeModelId?: IntFieldUpdateOperationsInput | number
    collectionId?: NullableIntFieldUpdateOperationsInput | number | null
    itemImages?: ItemImageUncheckedUpdateManyWithoutItemNestedInput
    userItem?: UserItemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id: string
    model: string
    series?: string | null
    seriesNum?: string | null
    year: string
    status?: boolean
    image?: string | null
    createdAt?: Date | string
    userId?: string | null
    typeModelId: number
    collectionId?: number | null
  }

  export type ItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    series?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNum?: NullableStringFieldUpdateOperationsInput | string | null
    year?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    series?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNum?: NullableStringFieldUpdateOperationsInput | string | null
    year?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    typeModelId?: IntFieldUpdateOperationsInput | number
    collectionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ItemImageCreateInput = {
    id?: string
    fileName: string
    link: string
    principal?: boolean
    createdAt?: Date | string
    status?: boolean
    item: ItemCreateNestedOneWithoutItemImagesInput
  }

  export type ItemImageUncheckedCreateInput = {
    id?: string
    itemId: string
    fileName: string
    link: string
    principal?: boolean
    createdAt?: Date | string
    status?: boolean
  }

  export type ItemImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    principal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    item?: ItemUpdateOneRequiredWithoutItemImagesNestedInput
  }

  export type ItemImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    principal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ItemImageCreateManyInput = {
    id?: string
    itemId: string
    fileName: string
    link: string
    principal?: boolean
    createdAt?: Date | string
    status?: boolean
  }

  export type ItemImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    principal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ItemImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    principal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCollectionCreateInput = {
    id?: string
    description?: string | null
    name: string
    createdAt?: Date | string
    status?: boolean
    user: UserCreateNestedOneWithoutUserCollectionsInput
    collection?: CollectionCreateNestedOneWithoutCollectionsInput
    parent?: UserCollectionCreateNestedOneWithoutChildCollectionsInput
    childCollections?: UserCollectionCreateNestedManyWithoutParentInput
    items?: UserItemCreateNestedManyWithoutUserCollectionInput
  }

  export type UserCollectionUncheckedCreateInput = {
    id?: string
    description?: string | null
    name: string
    userId: string
    collectionId?: number | null
    createdAt?: Date | string
    status?: boolean
    fatherId?: string | null
    childCollections?: UserCollectionUncheckedCreateNestedManyWithoutParentInput
    items?: UserItemUncheckedCreateNestedManyWithoutUserCollectionInput
  }

  export type UserCollectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserCollectionsNestedInput
    collection?: CollectionUpdateOneWithoutCollectionsNestedInput
    parent?: UserCollectionUpdateOneWithoutChildCollectionsNestedInput
    childCollections?: UserCollectionUpdateManyWithoutParentNestedInput
    items?: UserItemUpdateManyWithoutUserCollectionNestedInput
  }

  export type UserCollectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    collectionId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    childCollections?: UserCollectionUncheckedUpdateManyWithoutParentNestedInput
    items?: UserItemUncheckedUpdateManyWithoutUserCollectionNestedInput
  }

  export type UserCollectionCreateManyInput = {
    id?: string
    description?: string | null
    name: string
    userId: string
    collectionId?: number | null
    createdAt?: Date | string
    status?: boolean
    fatherId?: string | null
  }

  export type UserCollectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCollectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    collectionId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserItemCreateInput = {
    createdAt?: Date | string
    description?: string | null
    scale?: string | null
    name?: string | null
    userCollection?: UserCollectionCreateNestedOneWithoutItemsInput
    item?: ItemCreateNestedOneWithoutUserItemInput
    itemImages?: UserItemImageCreateNestedManyWithoutUserItemInput
  }

  export type UserItemUncheckedCreateInput = {
    createdAt?: Date | string
    description?: string | null
    scale?: string | null
    name?: string | null
    itemId: string
    userCollectionId: string
    itemImages?: UserItemImageUncheckedCreateNestedManyWithoutUserItemInput
  }

  export type UserItemUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scale?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userCollection?: UserCollectionUpdateOneWithoutItemsNestedInput
    item?: ItemUpdateOneWithoutUserItemNestedInput
    itemImages?: UserItemImageUpdateManyWithoutUserItemNestedInput
  }

  export type UserItemUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scale?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    itemId?: StringFieldUpdateOperationsInput | string
    userCollectionId?: StringFieldUpdateOperationsInput | string
    itemImages?: UserItemImageUncheckedUpdateManyWithoutUserItemNestedInput
  }

  export type UserItemCreateManyInput = {
    createdAt?: Date | string
    description?: string | null
    scale?: string | null
    name?: string | null
    itemId: string
    userCollectionId: string
  }

  export type UserItemUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scale?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserItemUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scale?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    itemId?: StringFieldUpdateOperationsInput | string
    userCollectionId?: StringFieldUpdateOperationsInput | string
  }

  export type UserItemImageCreateInput = {
    id?: string
    link: string
    fileName: string
    principal?: boolean
    createdAt?: Date | string
    status?: boolean
    userItem: UserItemCreateNestedOneWithoutItemImagesInput
  }

  export type UserItemImageUncheckedCreateInput = {
    id?: string
    itemId: string
    userCollectionId: string
    link: string
    fileName: string
    principal?: boolean
    createdAt?: Date | string
    status?: boolean
  }

  export type UserItemImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    principal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    userItem?: UserItemUpdateOneRequiredWithoutItemImagesNestedInput
  }

  export type UserItemImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    userCollectionId?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    principal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserItemImageCreateManyInput = {
    id?: string
    itemId: string
    userCollectionId: string
    link: string
    fileName: string
    principal?: boolean
    createdAt?: Date | string
    status?: boolean
  }

  export type UserItemImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    principal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserItemImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    userCollectionId?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    principal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LogStripeWebhookCreateInput = {
    id?: string
    description?: string | null
    eventType?: string | null
    error?: string | null
    custumerId?: string | null
    status?: boolean
    data?: Date | string
  }

  export type LogStripeWebhookUncheckedCreateInput = {
    id?: string
    description?: string | null
    eventType?: string | null
    error?: string | null
    custumerId?: string | null
    status?: boolean
    data?: Date | string
  }

  export type LogStripeWebhookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    custumerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogStripeWebhookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    custumerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogStripeWebhookCreateManyInput = {
    id?: string
    description?: string | null
    eventType?: string | null
    error?: string | null
    custumerId?: string | null
    status?: boolean
    data?: Date | string
  }

  export type LogStripeWebhookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    custumerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogStripeWebhookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    custumerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    priceId?: SortOrder
    description?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    priceId?: SortOrder
    description?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    priceId?: SortOrder
    description?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type UserCollectionListRelationFilter = {
    every?: UserCollectionWhereInput
    some?: UserCollectionWhereInput
    none?: UserCollectionWhereInput
  }

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type TwoFactorConfirmationNullableRelationFilter = {
    is?: TwoFactorConfirmationWhereInput | null
    isNot?: TwoFactorConfirmationWhereInput | null
  }

  export type PlanNullableRelationFilter = {
    is?: PlanWhereInput | null
    isNot?: PlanWhereInput | null
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCollectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    cpf?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    planId?: SortOrder
    custumerId?: SortOrder
    isTwoFactorEnabled?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    cpf?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    planId?: SortOrder
    custumerId?: SortOrder
    isTwoFactorEnabled?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    cpf?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    planId?: SortOrder
    custumerId?: SortOrder
    isTwoFactorEnabled?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type PasswordResetTokenEmailTokenCompoundUniqueInput = {
    email: string
    token: string
  }

  export type PasswordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type PasswordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type PasswordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type TwoFactorTokenEmailTokenCompoundUniqueInput = {
    email: string
    token: string
  }

  export type TwoFactorTokenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type TwoFactorTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type TwoFactorTokenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type TwoFactorConfirmationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TwoFactorConfirmationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TwoFactorConfirmationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CollectionCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type CollectionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type CollectionMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type CollectionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TypeModelCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type TypeModelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TypeModelMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type TypeModelMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type TypeModelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CollectionNullableRelationFilter = {
    is?: CollectionWhereInput | null
    isNot?: CollectionWhereInput | null
  }

  export type TypeModelRelationFilter = {
    is?: TypeModelWhereInput
    isNot?: TypeModelWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ItemImageListRelationFilter = {
    every?: ItemImageWhereInput
    some?: ItemImageWhereInput
    none?: ItemImageWhereInput
  }

  export type UserItemListRelationFilter = {
    every?: UserItemWhereInput
    some?: UserItemWhereInput
    none?: UserItemWhereInput
  }

  export type ItemImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    series?: SortOrder
    seriesNum?: SortOrder
    year?: SortOrder
    status?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    typeModelId?: SortOrder
    collectionId?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    typeModelId?: SortOrder
    collectionId?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    series?: SortOrder
    seriesNum?: SortOrder
    year?: SortOrder
    status?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    typeModelId?: SortOrder
    collectionId?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    series?: SortOrder
    seriesNum?: SortOrder
    year?: SortOrder
    status?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    typeModelId?: SortOrder
    collectionId?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    typeModelId?: SortOrder
    collectionId?: SortOrder
  }

  export type ItemRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type ItemImageCountOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    fileName?: SortOrder
    link?: SortOrder
    principal?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type ItemImageMaxOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    fileName?: SortOrder
    link?: SortOrder
    principal?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type ItemImageMinOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    fileName?: SortOrder
    link?: SortOrder
    principal?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type UserCollectionNullableRelationFilter = {
    is?: UserCollectionWhereInput | null
    isNot?: UserCollectionWhereInput | null
  }

  export type UserCollectionCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    fatherId?: SortOrder
  }

  export type UserCollectionAvgOrderByAggregateInput = {
    collectionId?: SortOrder
  }

  export type UserCollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    fatherId?: SortOrder
  }

  export type UserCollectionMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    collectionId?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    fatherId?: SortOrder
  }

  export type UserCollectionSumOrderByAggregateInput = {
    collectionId?: SortOrder
  }

  export type ItemNullableRelationFilter = {
    is?: ItemWhereInput | null
    isNot?: ItemWhereInput | null
  }

  export type UserItemImageListRelationFilter = {
    every?: UserItemImageWhereInput
    some?: UserItemImageWhereInput
    none?: UserItemImageWhereInput
  }

  export type UserItemImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserItemItemIdUserCollectionIdCompoundUniqueInput = {
    itemId: string
    userCollectionId: string
  }

  export type UserItemCountOrderByAggregateInput = {
    createdAt?: SortOrder
    description?: SortOrder
    scale?: SortOrder
    name?: SortOrder
    itemId?: SortOrder
    userCollectionId?: SortOrder
  }

  export type UserItemMaxOrderByAggregateInput = {
    createdAt?: SortOrder
    description?: SortOrder
    scale?: SortOrder
    name?: SortOrder
    itemId?: SortOrder
    userCollectionId?: SortOrder
  }

  export type UserItemMinOrderByAggregateInput = {
    createdAt?: SortOrder
    description?: SortOrder
    scale?: SortOrder
    name?: SortOrder
    itemId?: SortOrder
    userCollectionId?: SortOrder
  }

  export type UserItemRelationFilter = {
    is?: UserItemWhereInput
    isNot?: UserItemWhereInput
  }

  export type UserItemImageCountOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    userCollectionId?: SortOrder
    link?: SortOrder
    fileName?: SortOrder
    principal?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type UserItemImageMaxOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    userCollectionId?: SortOrder
    link?: SortOrder
    fileName?: SortOrder
    principal?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type UserItemImageMinOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    userCollectionId?: SortOrder
    link?: SortOrder
    fileName?: SortOrder
    principal?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type LogStripeWebhookCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    eventType?: SortOrder
    error?: SortOrder
    custumerId?: SortOrder
    status?: SortOrder
    data?: SortOrder
  }

  export type LogStripeWebhookMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    eventType?: SortOrder
    error?: SortOrder
    custumerId?: SortOrder
    status?: SortOrder
    data?: SortOrder
  }

  export type LogStripeWebhookMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    eventType?: SortOrder
    error?: SortOrder
    custumerId?: SortOrder
    status?: SortOrder
    data?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedManyWithoutPlanInput = {
    create?: XOR<UserCreateWithoutPlanInput, UserUncheckedCreateWithoutPlanInput> | UserCreateWithoutPlanInput[] | UserUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPlanInput | UserCreateOrConnectWithoutPlanInput[]
    createMany?: UserCreateManyPlanInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<UserCreateWithoutPlanInput, UserUncheckedCreateWithoutPlanInput> | UserCreateWithoutPlanInput[] | UserUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPlanInput | UserCreateOrConnectWithoutPlanInput[]
    createMany?: UserCreateManyPlanInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutPlanNestedInput = {
    create?: XOR<UserCreateWithoutPlanInput, UserUncheckedCreateWithoutPlanInput> | UserCreateWithoutPlanInput[] | UserUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPlanInput | UserCreateOrConnectWithoutPlanInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPlanInput | UserUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: UserCreateManyPlanInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPlanInput | UserUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPlanInput | UserUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<UserCreateWithoutPlanInput, UserUncheckedCreateWithoutPlanInput> | UserCreateWithoutPlanInput[] | UserUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: UserCreateOrConnectWithoutPlanInput | UserCreateOrConnectWithoutPlanInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutPlanInput | UserUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: UserCreateManyPlanInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutPlanInput | UserUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: UserUpdateManyWithWhereWithoutPlanInput | UserUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserCollectionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCollectionCreateWithoutUserInput, UserCollectionUncheckedCreateWithoutUserInput> | UserCollectionCreateWithoutUserInput[] | UserCollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCollectionCreateOrConnectWithoutUserInput | UserCollectionCreateOrConnectWithoutUserInput[]
    createMany?: UserCollectionCreateManyUserInputEnvelope
    connect?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
  }

  export type ItemCreateNestedManyWithoutUserInput = {
    create?: XOR<ItemCreateWithoutUserInput, ItemUncheckedCreateWithoutUserInput> | ItemCreateWithoutUserInput[] | ItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutUserInput | ItemCreateOrConnectWithoutUserInput[]
    createMany?: ItemCreateManyUserInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type TwoFactorConfirmationCreateNestedOneWithoutUserInput = {
    create?: XOR<TwoFactorConfirmationCreateWithoutUserInput, TwoFactorConfirmationUncheckedCreateWithoutUserInput>
    connectOrCreate?: TwoFactorConfirmationCreateOrConnectWithoutUserInput
    connect?: TwoFactorConfirmationWhereUniqueInput
  }

  export type PlanCreateNestedOneWithoutUsersInput = {
    create?: XOR<PlanCreateWithoutUsersInput, PlanUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PlanCreateOrConnectWithoutUsersInput
    connect?: PlanWhereUniqueInput
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserCollectionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCollectionCreateWithoutUserInput, UserCollectionUncheckedCreateWithoutUserInput> | UserCollectionCreateWithoutUserInput[] | UserCollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCollectionCreateOrConnectWithoutUserInput | UserCollectionCreateOrConnectWithoutUserInput[]
    createMany?: UserCollectionCreateManyUserInputEnvelope
    connect?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ItemCreateWithoutUserInput, ItemUncheckedCreateWithoutUserInput> | ItemCreateWithoutUserInput[] | ItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutUserInput | ItemCreateOrConnectWithoutUserInput[]
    createMany?: ItemCreateManyUserInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type TwoFactorConfirmationUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TwoFactorConfirmationCreateWithoutUserInput, TwoFactorConfirmationUncheckedCreateWithoutUserInput>
    connectOrCreate?: TwoFactorConfirmationCreateOrConnectWithoutUserInput
    connect?: TwoFactorConfirmationWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCollectionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCollectionCreateWithoutUserInput, UserCollectionUncheckedCreateWithoutUserInput> | UserCollectionCreateWithoutUserInput[] | UserCollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCollectionCreateOrConnectWithoutUserInput | UserCollectionCreateOrConnectWithoutUserInput[]
    upsert?: UserCollectionUpsertWithWhereUniqueWithoutUserInput | UserCollectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCollectionCreateManyUserInputEnvelope
    set?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
    disconnect?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
    delete?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
    connect?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
    update?: UserCollectionUpdateWithWhereUniqueWithoutUserInput | UserCollectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCollectionUpdateManyWithWhereWithoutUserInput | UserCollectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCollectionScalarWhereInput | UserCollectionScalarWhereInput[]
  }

  export type ItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<ItemCreateWithoutUserInput, ItemUncheckedCreateWithoutUserInput> | ItemCreateWithoutUserInput[] | ItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutUserInput | ItemCreateOrConnectWithoutUserInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutUserInput | ItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ItemCreateManyUserInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutUserInput | ItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutUserInput | ItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type TwoFactorConfirmationUpdateOneWithoutUserNestedInput = {
    create?: XOR<TwoFactorConfirmationCreateWithoutUserInput, TwoFactorConfirmationUncheckedCreateWithoutUserInput>
    connectOrCreate?: TwoFactorConfirmationCreateOrConnectWithoutUserInput
    upsert?: TwoFactorConfirmationUpsertWithoutUserInput
    disconnect?: TwoFactorConfirmationWhereInput | boolean
    delete?: TwoFactorConfirmationWhereInput | boolean
    connect?: TwoFactorConfirmationWhereUniqueInput
    update?: XOR<XOR<TwoFactorConfirmationUpdateToOneWithWhereWithoutUserInput, TwoFactorConfirmationUpdateWithoutUserInput>, TwoFactorConfirmationUncheckedUpdateWithoutUserInput>
  }

  export type PlanUpdateOneWithoutUsersNestedInput = {
    create?: XOR<PlanCreateWithoutUsersInput, PlanUncheckedCreateWithoutUsersInput>
    connectOrCreate?: PlanCreateOrConnectWithoutUsersInput
    upsert?: PlanUpsertWithoutUsersInput
    disconnect?: PlanWhereInput | boolean
    delete?: PlanWhereInput | boolean
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutUsersInput, PlanUpdateWithoutUsersInput>, PlanUncheckedUpdateWithoutUsersInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCollectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCollectionCreateWithoutUserInput, UserCollectionUncheckedCreateWithoutUserInput> | UserCollectionCreateWithoutUserInput[] | UserCollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCollectionCreateOrConnectWithoutUserInput | UserCollectionCreateOrConnectWithoutUserInput[]
    upsert?: UserCollectionUpsertWithWhereUniqueWithoutUserInput | UserCollectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCollectionCreateManyUserInputEnvelope
    set?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
    disconnect?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
    delete?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
    connect?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
    update?: UserCollectionUpdateWithWhereUniqueWithoutUserInput | UserCollectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCollectionUpdateManyWithWhereWithoutUserInput | UserCollectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCollectionScalarWhereInput | UserCollectionScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ItemCreateWithoutUserInput, ItemUncheckedCreateWithoutUserInput> | ItemCreateWithoutUserInput[] | ItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutUserInput | ItemCreateOrConnectWithoutUserInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutUserInput | ItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ItemCreateManyUserInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutUserInput | ItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutUserInput | ItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type TwoFactorConfirmationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TwoFactorConfirmationCreateWithoutUserInput, TwoFactorConfirmationUncheckedCreateWithoutUserInput>
    connectOrCreate?: TwoFactorConfirmationCreateOrConnectWithoutUserInput
    upsert?: TwoFactorConfirmationUpsertWithoutUserInput
    disconnect?: TwoFactorConfirmationWhereInput | boolean
    delete?: TwoFactorConfirmationWhereInput | boolean
    connect?: TwoFactorConfirmationWhereUniqueInput
    update?: XOR<XOR<TwoFactorConfirmationUpdateToOneWithWhereWithoutUserInput, TwoFactorConfirmationUpdateWithoutUserInput>, TwoFactorConfirmationUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutTwoFactorConfirmationInput = {
    create?: XOR<UserCreateWithoutTwoFactorConfirmationInput, UserUncheckedCreateWithoutTwoFactorConfirmationInput>
    connectOrCreate?: UserCreateOrConnectWithoutTwoFactorConfirmationInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTwoFactorConfirmationNestedInput = {
    create?: XOR<UserCreateWithoutTwoFactorConfirmationInput, UserUncheckedCreateWithoutTwoFactorConfirmationInput>
    connectOrCreate?: UserCreateOrConnectWithoutTwoFactorConfirmationInput
    upsert?: UserUpsertWithoutTwoFactorConfirmationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTwoFactorConfirmationInput, UserUpdateWithoutTwoFactorConfirmationInput>, UserUncheckedUpdateWithoutTwoFactorConfirmationInput>
  }

  export type UserCollectionCreateNestedManyWithoutCollectionInput = {
    create?: XOR<UserCollectionCreateWithoutCollectionInput, UserCollectionUncheckedCreateWithoutCollectionInput> | UserCollectionCreateWithoutCollectionInput[] | UserCollectionUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: UserCollectionCreateOrConnectWithoutCollectionInput | UserCollectionCreateOrConnectWithoutCollectionInput[]
    createMany?: UserCollectionCreateManyCollectionInputEnvelope
    connect?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
  }

  export type ItemCreateNestedManyWithoutCollectionInput = {
    create?: XOR<ItemCreateWithoutCollectionInput, ItemUncheckedCreateWithoutCollectionInput> | ItemCreateWithoutCollectionInput[] | ItemUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCollectionInput | ItemCreateOrConnectWithoutCollectionInput[]
    createMany?: ItemCreateManyCollectionInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type UserCollectionUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<UserCollectionCreateWithoutCollectionInput, UserCollectionUncheckedCreateWithoutCollectionInput> | UserCollectionCreateWithoutCollectionInput[] | UserCollectionUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: UserCollectionCreateOrConnectWithoutCollectionInput | UserCollectionCreateOrConnectWithoutCollectionInput[]
    createMany?: UserCollectionCreateManyCollectionInputEnvelope
    connect?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<ItemCreateWithoutCollectionInput, ItemUncheckedCreateWithoutCollectionInput> | ItemCreateWithoutCollectionInput[] | ItemUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCollectionInput | ItemCreateOrConnectWithoutCollectionInput[]
    createMany?: ItemCreateManyCollectionInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCollectionUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<UserCollectionCreateWithoutCollectionInput, UserCollectionUncheckedCreateWithoutCollectionInput> | UserCollectionCreateWithoutCollectionInput[] | UserCollectionUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: UserCollectionCreateOrConnectWithoutCollectionInput | UserCollectionCreateOrConnectWithoutCollectionInput[]
    upsert?: UserCollectionUpsertWithWhereUniqueWithoutCollectionInput | UserCollectionUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: UserCollectionCreateManyCollectionInputEnvelope
    set?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
    disconnect?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
    delete?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
    connect?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
    update?: UserCollectionUpdateWithWhereUniqueWithoutCollectionInput | UserCollectionUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: UserCollectionUpdateManyWithWhereWithoutCollectionInput | UserCollectionUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: UserCollectionScalarWhereInput | UserCollectionScalarWhereInput[]
  }

  export type ItemUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<ItemCreateWithoutCollectionInput, ItemUncheckedCreateWithoutCollectionInput> | ItemCreateWithoutCollectionInput[] | ItemUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCollectionInput | ItemCreateOrConnectWithoutCollectionInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutCollectionInput | ItemUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: ItemCreateManyCollectionInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutCollectionInput | ItemUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutCollectionInput | ItemUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type UserCollectionUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<UserCollectionCreateWithoutCollectionInput, UserCollectionUncheckedCreateWithoutCollectionInput> | UserCollectionCreateWithoutCollectionInput[] | UserCollectionUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: UserCollectionCreateOrConnectWithoutCollectionInput | UserCollectionCreateOrConnectWithoutCollectionInput[]
    upsert?: UserCollectionUpsertWithWhereUniqueWithoutCollectionInput | UserCollectionUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: UserCollectionCreateManyCollectionInputEnvelope
    set?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
    disconnect?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
    delete?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
    connect?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
    update?: UserCollectionUpdateWithWhereUniqueWithoutCollectionInput | UserCollectionUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: UserCollectionUpdateManyWithWhereWithoutCollectionInput | UserCollectionUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: UserCollectionScalarWhereInput | UserCollectionScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<ItemCreateWithoutCollectionInput, ItemUncheckedCreateWithoutCollectionInput> | ItemCreateWithoutCollectionInput[] | ItemUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCollectionInput | ItemCreateOrConnectWithoutCollectionInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutCollectionInput | ItemUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: ItemCreateManyCollectionInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutCollectionInput | ItemUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutCollectionInput | ItemUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemCreateNestedManyWithoutTypeModelInput = {
    create?: XOR<ItemCreateWithoutTypeModelInput, ItemUncheckedCreateWithoutTypeModelInput> | ItemCreateWithoutTypeModelInput[] | ItemUncheckedCreateWithoutTypeModelInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutTypeModelInput | ItemCreateOrConnectWithoutTypeModelInput[]
    createMany?: ItemCreateManyTypeModelInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutTypeModelInput = {
    create?: XOR<ItemCreateWithoutTypeModelInput, ItemUncheckedCreateWithoutTypeModelInput> | ItemCreateWithoutTypeModelInput[] | ItemUncheckedCreateWithoutTypeModelInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutTypeModelInput | ItemCreateOrConnectWithoutTypeModelInput[]
    createMany?: ItemCreateManyTypeModelInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUpdateManyWithoutTypeModelNestedInput = {
    create?: XOR<ItemCreateWithoutTypeModelInput, ItemUncheckedCreateWithoutTypeModelInput> | ItemCreateWithoutTypeModelInput[] | ItemUncheckedCreateWithoutTypeModelInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutTypeModelInput | ItemCreateOrConnectWithoutTypeModelInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutTypeModelInput | ItemUpsertWithWhereUniqueWithoutTypeModelInput[]
    createMany?: ItemCreateManyTypeModelInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutTypeModelInput | ItemUpdateWithWhereUniqueWithoutTypeModelInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutTypeModelInput | ItemUpdateManyWithWhereWithoutTypeModelInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutTypeModelNestedInput = {
    create?: XOR<ItemCreateWithoutTypeModelInput, ItemUncheckedCreateWithoutTypeModelInput> | ItemCreateWithoutTypeModelInput[] | ItemUncheckedCreateWithoutTypeModelInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutTypeModelInput | ItemCreateOrConnectWithoutTypeModelInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutTypeModelInput | ItemUpsertWithWhereUniqueWithoutTypeModelInput[]
    createMany?: ItemCreateManyTypeModelInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutTypeModelInput | ItemUpdateWithWhereUniqueWithoutTypeModelInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutTypeModelInput | ItemUpdateManyWithWhereWithoutTypeModelInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type CollectionCreateNestedOneWithoutItemsInput = {
    create?: XOR<CollectionCreateWithoutItemsInput, CollectionUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutItemsInput
    connect?: CollectionWhereUniqueInput
  }

  export type TypeModelCreateNestedOneWithoutItemsInput = {
    create?: XOR<TypeModelCreateWithoutItemsInput, TypeModelUncheckedCreateWithoutItemsInput>
    connectOrCreate?: TypeModelCreateOrConnectWithoutItemsInput
    connect?: TypeModelWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutItemsInput = {
    create?: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemsInput
    connect?: UserWhereUniqueInput
  }

  export type ItemImageCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemImageCreateWithoutItemInput, ItemImageUncheckedCreateWithoutItemInput> | ItemImageCreateWithoutItemInput[] | ItemImageUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemImageCreateOrConnectWithoutItemInput | ItemImageCreateOrConnectWithoutItemInput[]
    createMany?: ItemImageCreateManyItemInputEnvelope
    connect?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
  }

  export type UserItemCreateNestedManyWithoutItemInput = {
    create?: XOR<UserItemCreateWithoutItemInput, UserItemUncheckedCreateWithoutItemInput> | UserItemCreateWithoutItemInput[] | UserItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: UserItemCreateOrConnectWithoutItemInput | UserItemCreateOrConnectWithoutItemInput[]
    createMany?: UserItemCreateManyItemInputEnvelope
    connect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
  }

  export type ItemImageUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemImageCreateWithoutItemInput, ItemImageUncheckedCreateWithoutItemInput> | ItemImageCreateWithoutItemInput[] | ItemImageUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemImageCreateOrConnectWithoutItemInput | ItemImageCreateOrConnectWithoutItemInput[]
    createMany?: ItemImageCreateManyItemInputEnvelope
    connect?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
  }

  export type UserItemUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<UserItemCreateWithoutItemInput, UserItemUncheckedCreateWithoutItemInput> | UserItemCreateWithoutItemInput[] | UserItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: UserItemCreateOrConnectWithoutItemInput | UserItemCreateOrConnectWithoutItemInput[]
    createMany?: UserItemCreateManyItemInputEnvelope
    connect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
  }

  export type CollectionUpdateOneWithoutItemsNestedInput = {
    create?: XOR<CollectionCreateWithoutItemsInput, CollectionUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutItemsInput
    upsert?: CollectionUpsertWithoutItemsInput
    disconnect?: CollectionWhereInput | boolean
    delete?: CollectionWhereInput | boolean
    connect?: CollectionWhereUniqueInput
    update?: XOR<XOR<CollectionUpdateToOneWithWhereWithoutItemsInput, CollectionUpdateWithoutItemsInput>, CollectionUncheckedUpdateWithoutItemsInput>
  }

  export type TypeModelUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<TypeModelCreateWithoutItemsInput, TypeModelUncheckedCreateWithoutItemsInput>
    connectOrCreate?: TypeModelCreateOrConnectWithoutItemsInput
    upsert?: TypeModelUpsertWithoutItemsInput
    connect?: TypeModelWhereUniqueInput
    update?: XOR<XOR<TypeModelUpdateToOneWithWhereWithoutItemsInput, TypeModelUpdateWithoutItemsInput>, TypeModelUncheckedUpdateWithoutItemsInput>
  }

  export type UserUpdateOneWithoutItemsNestedInput = {
    create?: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemsInput
    upsert?: UserUpsertWithoutItemsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutItemsInput, UserUpdateWithoutItemsInput>, UserUncheckedUpdateWithoutItemsInput>
  }

  export type ItemImageUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemImageCreateWithoutItemInput, ItemImageUncheckedCreateWithoutItemInput> | ItemImageCreateWithoutItemInput[] | ItemImageUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemImageCreateOrConnectWithoutItemInput | ItemImageCreateOrConnectWithoutItemInput[]
    upsert?: ItemImageUpsertWithWhereUniqueWithoutItemInput | ItemImageUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemImageCreateManyItemInputEnvelope
    set?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
    disconnect?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
    delete?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
    connect?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
    update?: ItemImageUpdateWithWhereUniqueWithoutItemInput | ItemImageUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemImageUpdateManyWithWhereWithoutItemInput | ItemImageUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemImageScalarWhereInput | ItemImageScalarWhereInput[]
  }

  export type UserItemUpdateManyWithoutItemNestedInput = {
    create?: XOR<UserItemCreateWithoutItemInput, UserItemUncheckedCreateWithoutItemInput> | UserItemCreateWithoutItemInput[] | UserItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: UserItemCreateOrConnectWithoutItemInput | UserItemCreateOrConnectWithoutItemInput[]
    upsert?: UserItemUpsertWithWhereUniqueWithoutItemInput | UserItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: UserItemCreateManyItemInputEnvelope
    set?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    disconnect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    delete?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    connect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    update?: UserItemUpdateWithWhereUniqueWithoutItemInput | UserItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: UserItemUpdateManyWithWhereWithoutItemInput | UserItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: UserItemScalarWhereInput | UserItemScalarWhereInput[]
  }

  export type ItemImageUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemImageCreateWithoutItemInput, ItemImageUncheckedCreateWithoutItemInput> | ItemImageCreateWithoutItemInput[] | ItemImageUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemImageCreateOrConnectWithoutItemInput | ItemImageCreateOrConnectWithoutItemInput[]
    upsert?: ItemImageUpsertWithWhereUniqueWithoutItemInput | ItemImageUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemImageCreateManyItemInputEnvelope
    set?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
    disconnect?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
    delete?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
    connect?: ItemImageWhereUniqueInput | ItemImageWhereUniqueInput[]
    update?: ItemImageUpdateWithWhereUniqueWithoutItemInput | ItemImageUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemImageUpdateManyWithWhereWithoutItemInput | ItemImageUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemImageScalarWhereInput | ItemImageScalarWhereInput[]
  }

  export type UserItemUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<UserItemCreateWithoutItemInput, UserItemUncheckedCreateWithoutItemInput> | UserItemCreateWithoutItemInput[] | UserItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: UserItemCreateOrConnectWithoutItemInput | UserItemCreateOrConnectWithoutItemInput[]
    upsert?: UserItemUpsertWithWhereUniqueWithoutItemInput | UserItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: UserItemCreateManyItemInputEnvelope
    set?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    disconnect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    delete?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    connect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    update?: UserItemUpdateWithWhereUniqueWithoutItemInput | UserItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: UserItemUpdateManyWithWhereWithoutItemInput | UserItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: UserItemScalarWhereInput | UserItemScalarWhereInput[]
  }

  export type ItemCreateNestedOneWithoutItemImagesInput = {
    create?: XOR<ItemCreateWithoutItemImagesInput, ItemUncheckedCreateWithoutItemImagesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutItemImagesInput
    connect?: ItemWhereUniqueInput
  }

  export type ItemUpdateOneRequiredWithoutItemImagesNestedInput = {
    create?: XOR<ItemCreateWithoutItemImagesInput, ItemUncheckedCreateWithoutItemImagesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutItemImagesInput
    upsert?: ItemUpsertWithoutItemImagesInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutItemImagesInput, ItemUpdateWithoutItemImagesInput>, ItemUncheckedUpdateWithoutItemImagesInput>
  }

  export type UserCreateNestedOneWithoutUserCollectionsInput = {
    create?: XOR<UserCreateWithoutUserCollectionsInput, UserUncheckedCreateWithoutUserCollectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCollectionsInput
    connect?: UserWhereUniqueInput
  }

  export type CollectionCreateNestedOneWithoutCollectionsInput = {
    create?: XOR<CollectionCreateWithoutCollectionsInput, CollectionUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutCollectionsInput
    connect?: CollectionWhereUniqueInput
  }

  export type UserCollectionCreateNestedOneWithoutChildCollectionsInput = {
    create?: XOR<UserCollectionCreateWithoutChildCollectionsInput, UserCollectionUncheckedCreateWithoutChildCollectionsInput>
    connectOrCreate?: UserCollectionCreateOrConnectWithoutChildCollectionsInput
    connect?: UserCollectionWhereUniqueInput
  }

  export type UserCollectionCreateNestedManyWithoutParentInput = {
    create?: XOR<UserCollectionCreateWithoutParentInput, UserCollectionUncheckedCreateWithoutParentInput> | UserCollectionCreateWithoutParentInput[] | UserCollectionUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCollectionCreateOrConnectWithoutParentInput | UserCollectionCreateOrConnectWithoutParentInput[]
    createMany?: UserCollectionCreateManyParentInputEnvelope
    connect?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
  }

  export type UserItemCreateNestedManyWithoutUserCollectionInput = {
    create?: XOR<UserItemCreateWithoutUserCollectionInput, UserItemUncheckedCreateWithoutUserCollectionInput> | UserItemCreateWithoutUserCollectionInput[] | UserItemUncheckedCreateWithoutUserCollectionInput[]
    connectOrCreate?: UserItemCreateOrConnectWithoutUserCollectionInput | UserItemCreateOrConnectWithoutUserCollectionInput[]
    createMany?: UserItemCreateManyUserCollectionInputEnvelope
    connect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
  }

  export type UserCollectionUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<UserCollectionCreateWithoutParentInput, UserCollectionUncheckedCreateWithoutParentInput> | UserCollectionCreateWithoutParentInput[] | UserCollectionUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCollectionCreateOrConnectWithoutParentInput | UserCollectionCreateOrConnectWithoutParentInput[]
    createMany?: UserCollectionCreateManyParentInputEnvelope
    connect?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
  }

  export type UserItemUncheckedCreateNestedManyWithoutUserCollectionInput = {
    create?: XOR<UserItemCreateWithoutUserCollectionInput, UserItemUncheckedCreateWithoutUserCollectionInput> | UserItemCreateWithoutUserCollectionInput[] | UserItemUncheckedCreateWithoutUserCollectionInput[]
    connectOrCreate?: UserItemCreateOrConnectWithoutUserCollectionInput | UserItemCreateOrConnectWithoutUserCollectionInput[]
    createMany?: UserItemCreateManyUserCollectionInputEnvelope
    connect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutUserCollectionsNestedInput = {
    create?: XOR<UserCreateWithoutUserCollectionsInput, UserUncheckedCreateWithoutUserCollectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCollectionsInput
    upsert?: UserUpsertWithoutUserCollectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserCollectionsInput, UserUpdateWithoutUserCollectionsInput>, UserUncheckedUpdateWithoutUserCollectionsInput>
  }

  export type CollectionUpdateOneWithoutCollectionsNestedInput = {
    create?: XOR<CollectionCreateWithoutCollectionsInput, CollectionUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutCollectionsInput
    upsert?: CollectionUpsertWithoutCollectionsInput
    disconnect?: CollectionWhereInput | boolean
    delete?: CollectionWhereInput | boolean
    connect?: CollectionWhereUniqueInput
    update?: XOR<XOR<CollectionUpdateToOneWithWhereWithoutCollectionsInput, CollectionUpdateWithoutCollectionsInput>, CollectionUncheckedUpdateWithoutCollectionsInput>
  }

  export type UserCollectionUpdateOneWithoutChildCollectionsNestedInput = {
    create?: XOR<UserCollectionCreateWithoutChildCollectionsInput, UserCollectionUncheckedCreateWithoutChildCollectionsInput>
    connectOrCreate?: UserCollectionCreateOrConnectWithoutChildCollectionsInput
    upsert?: UserCollectionUpsertWithoutChildCollectionsInput
    disconnect?: UserCollectionWhereInput | boolean
    delete?: UserCollectionWhereInput | boolean
    connect?: UserCollectionWhereUniqueInput
    update?: XOR<XOR<UserCollectionUpdateToOneWithWhereWithoutChildCollectionsInput, UserCollectionUpdateWithoutChildCollectionsInput>, UserCollectionUncheckedUpdateWithoutChildCollectionsInput>
  }

  export type UserCollectionUpdateManyWithoutParentNestedInput = {
    create?: XOR<UserCollectionCreateWithoutParentInput, UserCollectionUncheckedCreateWithoutParentInput> | UserCollectionCreateWithoutParentInput[] | UserCollectionUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCollectionCreateOrConnectWithoutParentInput | UserCollectionCreateOrConnectWithoutParentInput[]
    upsert?: UserCollectionUpsertWithWhereUniqueWithoutParentInput | UserCollectionUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: UserCollectionCreateManyParentInputEnvelope
    set?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
    disconnect?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
    delete?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
    connect?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
    update?: UserCollectionUpdateWithWhereUniqueWithoutParentInput | UserCollectionUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: UserCollectionUpdateManyWithWhereWithoutParentInput | UserCollectionUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: UserCollectionScalarWhereInput | UserCollectionScalarWhereInput[]
  }

  export type UserItemUpdateManyWithoutUserCollectionNestedInput = {
    create?: XOR<UserItemCreateWithoutUserCollectionInput, UserItemUncheckedCreateWithoutUserCollectionInput> | UserItemCreateWithoutUserCollectionInput[] | UserItemUncheckedCreateWithoutUserCollectionInput[]
    connectOrCreate?: UserItemCreateOrConnectWithoutUserCollectionInput | UserItemCreateOrConnectWithoutUserCollectionInput[]
    upsert?: UserItemUpsertWithWhereUniqueWithoutUserCollectionInput | UserItemUpsertWithWhereUniqueWithoutUserCollectionInput[]
    createMany?: UserItemCreateManyUserCollectionInputEnvelope
    set?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    disconnect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    delete?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    connect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    update?: UserItemUpdateWithWhereUniqueWithoutUserCollectionInput | UserItemUpdateWithWhereUniqueWithoutUserCollectionInput[]
    updateMany?: UserItemUpdateManyWithWhereWithoutUserCollectionInput | UserItemUpdateManyWithWhereWithoutUserCollectionInput[]
    deleteMany?: UserItemScalarWhereInput | UserItemScalarWhereInput[]
  }

  export type UserCollectionUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<UserCollectionCreateWithoutParentInput, UserCollectionUncheckedCreateWithoutParentInput> | UserCollectionCreateWithoutParentInput[] | UserCollectionUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCollectionCreateOrConnectWithoutParentInput | UserCollectionCreateOrConnectWithoutParentInput[]
    upsert?: UserCollectionUpsertWithWhereUniqueWithoutParentInput | UserCollectionUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: UserCollectionCreateManyParentInputEnvelope
    set?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
    disconnect?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
    delete?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
    connect?: UserCollectionWhereUniqueInput | UserCollectionWhereUniqueInput[]
    update?: UserCollectionUpdateWithWhereUniqueWithoutParentInput | UserCollectionUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: UserCollectionUpdateManyWithWhereWithoutParentInput | UserCollectionUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: UserCollectionScalarWhereInput | UserCollectionScalarWhereInput[]
  }

  export type UserItemUncheckedUpdateManyWithoutUserCollectionNestedInput = {
    create?: XOR<UserItemCreateWithoutUserCollectionInput, UserItemUncheckedCreateWithoutUserCollectionInput> | UserItemCreateWithoutUserCollectionInput[] | UserItemUncheckedCreateWithoutUserCollectionInput[]
    connectOrCreate?: UserItemCreateOrConnectWithoutUserCollectionInput | UserItemCreateOrConnectWithoutUserCollectionInput[]
    upsert?: UserItemUpsertWithWhereUniqueWithoutUserCollectionInput | UserItemUpsertWithWhereUniqueWithoutUserCollectionInput[]
    createMany?: UserItemCreateManyUserCollectionInputEnvelope
    set?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    disconnect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    delete?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    connect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    update?: UserItemUpdateWithWhereUniqueWithoutUserCollectionInput | UserItemUpdateWithWhereUniqueWithoutUserCollectionInput[]
    updateMany?: UserItemUpdateManyWithWhereWithoutUserCollectionInput | UserItemUpdateManyWithWhereWithoutUserCollectionInput[]
    deleteMany?: UserItemScalarWhereInput | UserItemScalarWhereInput[]
  }

  export type UserCollectionCreateNestedOneWithoutItemsInput = {
    create?: XOR<UserCollectionCreateWithoutItemsInput, UserCollectionUncheckedCreateWithoutItemsInput>
    connectOrCreate?: UserCollectionCreateOrConnectWithoutItemsInput
    connect?: UserCollectionWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutUserItemInput = {
    create?: XOR<ItemCreateWithoutUserItemInput, ItemUncheckedCreateWithoutUserItemInput>
    connectOrCreate?: ItemCreateOrConnectWithoutUserItemInput
    connect?: ItemWhereUniqueInput
  }

  export type UserItemImageCreateNestedManyWithoutUserItemInput = {
    create?: XOR<UserItemImageCreateWithoutUserItemInput, UserItemImageUncheckedCreateWithoutUserItemInput> | UserItemImageCreateWithoutUserItemInput[] | UserItemImageUncheckedCreateWithoutUserItemInput[]
    connectOrCreate?: UserItemImageCreateOrConnectWithoutUserItemInput | UserItemImageCreateOrConnectWithoutUserItemInput[]
    createMany?: UserItemImageCreateManyUserItemInputEnvelope
    connect?: UserItemImageWhereUniqueInput | UserItemImageWhereUniqueInput[]
  }

  export type UserItemImageUncheckedCreateNestedManyWithoutUserItemInput = {
    create?: XOR<UserItemImageCreateWithoutUserItemInput, UserItemImageUncheckedCreateWithoutUserItemInput> | UserItemImageCreateWithoutUserItemInput[] | UserItemImageUncheckedCreateWithoutUserItemInput[]
    connectOrCreate?: UserItemImageCreateOrConnectWithoutUserItemInput | UserItemImageCreateOrConnectWithoutUserItemInput[]
    createMany?: UserItemImageCreateManyUserItemInputEnvelope
    connect?: UserItemImageWhereUniqueInput | UserItemImageWhereUniqueInput[]
  }

  export type UserCollectionUpdateOneWithoutItemsNestedInput = {
    create?: XOR<UserCollectionCreateWithoutItemsInput, UserCollectionUncheckedCreateWithoutItemsInput>
    connectOrCreate?: UserCollectionCreateOrConnectWithoutItemsInput
    upsert?: UserCollectionUpsertWithoutItemsInput
    disconnect?: UserCollectionWhereInput | boolean
    delete?: UserCollectionWhereInput | boolean
    connect?: UserCollectionWhereUniqueInput
    update?: XOR<XOR<UserCollectionUpdateToOneWithWhereWithoutItemsInput, UserCollectionUpdateWithoutItemsInput>, UserCollectionUncheckedUpdateWithoutItemsInput>
  }

  export type ItemUpdateOneWithoutUserItemNestedInput = {
    create?: XOR<ItemCreateWithoutUserItemInput, ItemUncheckedCreateWithoutUserItemInput>
    connectOrCreate?: ItemCreateOrConnectWithoutUserItemInput
    upsert?: ItemUpsertWithoutUserItemInput
    disconnect?: ItemWhereInput | boolean
    delete?: ItemWhereInput | boolean
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutUserItemInput, ItemUpdateWithoutUserItemInput>, ItemUncheckedUpdateWithoutUserItemInput>
  }

  export type UserItemImageUpdateManyWithoutUserItemNestedInput = {
    create?: XOR<UserItemImageCreateWithoutUserItemInput, UserItemImageUncheckedCreateWithoutUserItemInput> | UserItemImageCreateWithoutUserItemInput[] | UserItemImageUncheckedCreateWithoutUserItemInput[]
    connectOrCreate?: UserItemImageCreateOrConnectWithoutUserItemInput | UserItemImageCreateOrConnectWithoutUserItemInput[]
    upsert?: UserItemImageUpsertWithWhereUniqueWithoutUserItemInput | UserItemImageUpsertWithWhereUniqueWithoutUserItemInput[]
    createMany?: UserItemImageCreateManyUserItemInputEnvelope
    set?: UserItemImageWhereUniqueInput | UserItemImageWhereUniqueInput[]
    disconnect?: UserItemImageWhereUniqueInput | UserItemImageWhereUniqueInput[]
    delete?: UserItemImageWhereUniqueInput | UserItemImageWhereUniqueInput[]
    connect?: UserItemImageWhereUniqueInput | UserItemImageWhereUniqueInput[]
    update?: UserItemImageUpdateWithWhereUniqueWithoutUserItemInput | UserItemImageUpdateWithWhereUniqueWithoutUserItemInput[]
    updateMany?: UserItemImageUpdateManyWithWhereWithoutUserItemInput | UserItemImageUpdateManyWithWhereWithoutUserItemInput[]
    deleteMany?: UserItemImageScalarWhereInput | UserItemImageScalarWhereInput[]
  }

  export type UserItemImageUncheckedUpdateManyWithoutUserItemNestedInput = {
    create?: XOR<UserItemImageCreateWithoutUserItemInput, UserItemImageUncheckedCreateWithoutUserItemInput> | UserItemImageCreateWithoutUserItemInput[] | UserItemImageUncheckedCreateWithoutUserItemInput[]
    connectOrCreate?: UserItemImageCreateOrConnectWithoutUserItemInput | UserItemImageCreateOrConnectWithoutUserItemInput[]
    upsert?: UserItemImageUpsertWithWhereUniqueWithoutUserItemInput | UserItemImageUpsertWithWhereUniqueWithoutUserItemInput[]
    createMany?: UserItemImageCreateManyUserItemInputEnvelope
    set?: UserItemImageWhereUniqueInput | UserItemImageWhereUniqueInput[]
    disconnect?: UserItemImageWhereUniqueInput | UserItemImageWhereUniqueInput[]
    delete?: UserItemImageWhereUniqueInput | UserItemImageWhereUniqueInput[]
    connect?: UserItemImageWhereUniqueInput | UserItemImageWhereUniqueInput[]
    update?: UserItemImageUpdateWithWhereUniqueWithoutUserItemInput | UserItemImageUpdateWithWhereUniqueWithoutUserItemInput[]
    updateMany?: UserItemImageUpdateManyWithWhereWithoutUserItemInput | UserItemImageUpdateManyWithWhereWithoutUserItemInput[]
    deleteMany?: UserItemImageScalarWhereInput | UserItemImageScalarWhereInput[]
  }

  export type UserItemCreateNestedOneWithoutItemImagesInput = {
    create?: XOR<UserItemCreateWithoutItemImagesInput, UserItemUncheckedCreateWithoutItemImagesInput>
    connectOrCreate?: UserItemCreateOrConnectWithoutItemImagesInput
    connect?: UserItemWhereUniqueInput
  }

  export type UserItemUpdateOneRequiredWithoutItemImagesNestedInput = {
    create?: XOR<UserItemCreateWithoutItemImagesInput, UserItemUncheckedCreateWithoutItemImagesInput>
    connectOrCreate?: UserItemCreateOrConnectWithoutItemImagesInput
    upsert?: UserItemUpsertWithoutItemImagesInput
    connect?: UserItemWhereUniqueInput
    update?: XOR<XOR<UserItemUpdateToOneWithWhereWithoutItemImagesInput, UserItemUpdateWithoutItemImagesInput>, UserItemUncheckedUpdateWithoutItemImagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    cpf?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    custumerId?: string | null
    isTwoFactorEnabled?: boolean
    sessions?: SessionCreateNestedManyWithoutUserInput
    userCollections?: UserCollectionCreateNestedManyWithoutUserInput
    items?: ItemCreateNestedManyWithoutUserInput
    twoFactorConfirmation?: TwoFactorConfirmationCreateNestedOneWithoutUserInput
    plan?: PlanCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    cpf?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    planId?: string | null
    custumerId?: string | null
    isTwoFactorEnabled?: boolean
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    userCollections?: UserCollectionUncheckedCreateNestedManyWithoutUserInput
    items?: ItemUncheckedCreateNestedManyWithoutUserInput
    twoFactorConfirmation?: TwoFactorConfirmationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    custumerId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUpdateManyWithoutUserNestedInput
    userCollections?: UserCollectionUpdateManyWithoutUserNestedInput
    items?: ItemUpdateManyWithoutUserNestedInput
    twoFactorConfirmation?: TwoFactorConfirmationUpdateOneWithoutUserNestedInput
    plan?: PlanUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    custumerId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    userCollections?: UserCollectionUncheckedUpdateManyWithoutUserNestedInput
    items?: ItemUncheckedUpdateManyWithoutUserNestedInput
    twoFactorConfirmation?: TwoFactorConfirmationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutPlanInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    cpf?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    custumerId?: string | null
    isTwoFactorEnabled?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    userCollections?: UserCollectionCreateNestedManyWithoutUserInput
    items?: ItemCreateNestedManyWithoutUserInput
    twoFactorConfirmation?: TwoFactorConfirmationCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlanInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    cpf?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    custumerId?: string | null
    isTwoFactorEnabled?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    userCollections?: UserCollectionUncheckedCreateNestedManyWithoutUserInput
    items?: ItemUncheckedCreateNestedManyWithoutUserInput
    twoFactorConfirmation?: TwoFactorConfirmationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlanInput, UserUncheckedCreateWithoutPlanInput>
  }

  export type UserCreateManyPlanInputEnvelope = {
    data: UserCreateManyPlanInput | UserCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutPlanInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutPlanInput, UserUncheckedUpdateWithoutPlanInput>
    create: XOR<UserCreateWithoutPlanInput, UserUncheckedCreateWithoutPlanInput>
  }

  export type UserUpdateWithWhereUniqueWithoutPlanInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutPlanInput, UserUncheckedUpdateWithoutPlanInput>
  }

  export type UserUpdateManyWithWhereWithoutPlanInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutPlanInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    cpf?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    planId?: StringNullableFilter<"User"> | string | null
    custumerId?: StringNullableFilter<"User"> | string | null
    isTwoFactorEnabled?: BoolFilter<"User"> | boolean
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    cpf?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    custumerId?: string | null
    isTwoFactorEnabled?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    userCollections?: UserCollectionCreateNestedManyWithoutUserInput
    items?: ItemCreateNestedManyWithoutUserInput
    twoFactorConfirmation?: TwoFactorConfirmationCreateNestedOneWithoutUserInput
    plan?: PlanCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    cpf?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    planId?: string | null
    custumerId?: string | null
    isTwoFactorEnabled?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    userCollections?: UserCollectionUncheckedCreateNestedManyWithoutUserInput
    items?: ItemUncheckedCreateNestedManyWithoutUserInput
    twoFactorConfirmation?: TwoFactorConfirmationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    custumerId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    userCollections?: UserCollectionUpdateManyWithoutUserNestedInput
    items?: ItemUpdateManyWithoutUserNestedInput
    twoFactorConfirmation?: TwoFactorConfirmationUpdateOneWithoutUserNestedInput
    plan?: PlanUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    custumerId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    userCollections?: UserCollectionUncheckedUpdateManyWithoutUserNestedInput
    items?: ItemUncheckedUpdateManyWithoutUserNestedInput
    twoFactorConfirmation?: TwoFactorConfirmationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCollectionCreateWithoutUserInput = {
    id?: string
    description?: string | null
    name: string
    createdAt?: Date | string
    status?: boolean
    collection?: CollectionCreateNestedOneWithoutCollectionsInput
    parent?: UserCollectionCreateNestedOneWithoutChildCollectionsInput
    childCollections?: UserCollectionCreateNestedManyWithoutParentInput
    items?: UserItemCreateNestedManyWithoutUserCollectionInput
  }

  export type UserCollectionUncheckedCreateWithoutUserInput = {
    id?: string
    description?: string | null
    name: string
    collectionId?: number | null
    createdAt?: Date | string
    status?: boolean
    fatherId?: string | null
    childCollections?: UserCollectionUncheckedCreateNestedManyWithoutParentInput
    items?: UserItemUncheckedCreateNestedManyWithoutUserCollectionInput
  }

  export type UserCollectionCreateOrConnectWithoutUserInput = {
    where: UserCollectionWhereUniqueInput
    create: XOR<UserCollectionCreateWithoutUserInput, UserCollectionUncheckedCreateWithoutUserInput>
  }

  export type UserCollectionCreateManyUserInputEnvelope = {
    data: UserCollectionCreateManyUserInput | UserCollectionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ItemCreateWithoutUserInput = {
    id: string
    model: string
    series?: string | null
    seriesNum?: string | null
    year: string
    status?: boolean
    image?: string | null
    createdAt?: Date | string
    collection?: CollectionCreateNestedOneWithoutItemsInput
    typeModel: TypeModelCreateNestedOneWithoutItemsInput
    itemImages?: ItemImageCreateNestedManyWithoutItemInput
    userItem?: UserItemCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutUserInput = {
    id: string
    model: string
    series?: string | null
    seriesNum?: string | null
    year: string
    status?: boolean
    image?: string | null
    createdAt?: Date | string
    typeModelId: number
    collectionId?: number | null
    itemImages?: ItemImageUncheckedCreateNestedManyWithoutItemInput
    userItem?: UserItemUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutUserInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutUserInput, ItemUncheckedCreateWithoutUserInput>
  }

  export type ItemCreateManyUserInputEnvelope = {
    data: ItemCreateManyUserInput | ItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TwoFactorConfirmationCreateWithoutUserInput = {
    id?: string
  }

  export type TwoFactorConfirmationUncheckedCreateWithoutUserInput = {
    id?: string
  }

  export type TwoFactorConfirmationCreateOrConnectWithoutUserInput = {
    where: TwoFactorConfirmationWhereUniqueInput
    create: XOR<TwoFactorConfirmationCreateWithoutUserInput, TwoFactorConfirmationUncheckedCreateWithoutUserInput>
  }

  export type PlanCreateWithoutUsersInput = {
    id: string
    priceId: string
    description: string
  }

  export type PlanUncheckedCreateWithoutUsersInput = {
    id: string
    priceId: string
    description: string
  }

  export type PlanCreateOrConnectWithoutUsersInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutUsersInput, PlanUncheckedCreateWithoutUsersInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCollectionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCollectionWhereUniqueInput
    update: XOR<UserCollectionUpdateWithoutUserInput, UserCollectionUncheckedUpdateWithoutUserInput>
    create: XOR<UserCollectionCreateWithoutUserInput, UserCollectionUncheckedCreateWithoutUserInput>
  }

  export type UserCollectionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCollectionWhereUniqueInput
    data: XOR<UserCollectionUpdateWithoutUserInput, UserCollectionUncheckedUpdateWithoutUserInput>
  }

  export type UserCollectionUpdateManyWithWhereWithoutUserInput = {
    where: UserCollectionScalarWhereInput
    data: XOR<UserCollectionUpdateManyMutationInput, UserCollectionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCollectionScalarWhereInput = {
    AND?: UserCollectionScalarWhereInput | UserCollectionScalarWhereInput[]
    OR?: UserCollectionScalarWhereInput[]
    NOT?: UserCollectionScalarWhereInput | UserCollectionScalarWhereInput[]
    id?: StringFilter<"UserCollection"> | string
    description?: StringNullableFilter<"UserCollection"> | string | null
    name?: StringFilter<"UserCollection"> | string
    userId?: StringFilter<"UserCollection"> | string
    collectionId?: IntNullableFilter<"UserCollection"> | number | null
    createdAt?: DateTimeFilter<"UserCollection"> | Date | string
    status?: BoolFilter<"UserCollection"> | boolean
    fatherId?: StringNullableFilter<"UserCollection"> | string | null
  }

  export type ItemUpsertWithWhereUniqueWithoutUserInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutUserInput, ItemUncheckedUpdateWithoutUserInput>
    create: XOR<ItemCreateWithoutUserInput, ItemUncheckedCreateWithoutUserInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutUserInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutUserInput, ItemUncheckedUpdateWithoutUserInput>
  }

  export type ItemUpdateManyWithWhereWithoutUserInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutUserInput>
  }

  export type ItemScalarWhereInput = {
    AND?: ItemScalarWhereInput | ItemScalarWhereInput[]
    OR?: ItemScalarWhereInput[]
    NOT?: ItemScalarWhereInput | ItemScalarWhereInput[]
    id?: StringFilter<"Item"> | string
    model?: StringFilter<"Item"> | string
    series?: StringNullableFilter<"Item"> | string | null
    seriesNum?: StringNullableFilter<"Item"> | string | null
    year?: StringFilter<"Item"> | string
    status?: BoolFilter<"Item"> | boolean
    image?: StringNullableFilter<"Item"> | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    userId?: StringNullableFilter<"Item"> | string | null
    typeModelId?: IntFilter<"Item"> | number
    collectionId?: IntNullableFilter<"Item"> | number | null
  }

  export type TwoFactorConfirmationUpsertWithoutUserInput = {
    update: XOR<TwoFactorConfirmationUpdateWithoutUserInput, TwoFactorConfirmationUncheckedUpdateWithoutUserInput>
    create: XOR<TwoFactorConfirmationCreateWithoutUserInput, TwoFactorConfirmationUncheckedCreateWithoutUserInput>
    where?: TwoFactorConfirmationWhereInput
  }

  export type TwoFactorConfirmationUpdateToOneWithWhereWithoutUserInput = {
    where?: TwoFactorConfirmationWhereInput
    data: XOR<TwoFactorConfirmationUpdateWithoutUserInput, TwoFactorConfirmationUncheckedUpdateWithoutUserInput>
  }

  export type TwoFactorConfirmationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TwoFactorConfirmationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type PlanUpsertWithoutUsersInput = {
    update: XOR<PlanUpdateWithoutUsersInput, PlanUncheckedUpdateWithoutUsersInput>
    create: XOR<PlanCreateWithoutUsersInput, PlanUncheckedCreateWithoutUsersInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutUsersInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutUsersInput, PlanUncheckedUpdateWithoutUsersInput>
  }

  export type PlanUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PlanUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutTwoFactorConfirmationInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    cpf?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    custumerId?: string | null
    isTwoFactorEnabled?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    userCollections?: UserCollectionCreateNestedManyWithoutUserInput
    items?: ItemCreateNestedManyWithoutUserInput
    plan?: PlanCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutTwoFactorConfirmationInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    cpf?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    planId?: string | null
    custumerId?: string | null
    isTwoFactorEnabled?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    userCollections?: UserCollectionUncheckedCreateNestedManyWithoutUserInput
    items?: ItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTwoFactorConfirmationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTwoFactorConfirmationInput, UserUncheckedCreateWithoutTwoFactorConfirmationInput>
  }

  export type UserUpsertWithoutTwoFactorConfirmationInput = {
    update: XOR<UserUpdateWithoutTwoFactorConfirmationInput, UserUncheckedUpdateWithoutTwoFactorConfirmationInput>
    create: XOR<UserCreateWithoutTwoFactorConfirmationInput, UserUncheckedCreateWithoutTwoFactorConfirmationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTwoFactorConfirmationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTwoFactorConfirmationInput, UserUncheckedUpdateWithoutTwoFactorConfirmationInput>
  }

  export type UserUpdateWithoutTwoFactorConfirmationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    custumerId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    userCollections?: UserCollectionUpdateManyWithoutUserNestedInput
    items?: ItemUpdateManyWithoutUserNestedInput
    plan?: PlanUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutTwoFactorConfirmationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    custumerId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    userCollections?: UserCollectionUncheckedUpdateManyWithoutUserNestedInput
    items?: ItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCollectionCreateWithoutCollectionInput = {
    id?: string
    description?: string | null
    name: string
    createdAt?: Date | string
    status?: boolean
    user: UserCreateNestedOneWithoutUserCollectionsInput
    parent?: UserCollectionCreateNestedOneWithoutChildCollectionsInput
    childCollections?: UserCollectionCreateNestedManyWithoutParentInput
    items?: UserItemCreateNestedManyWithoutUserCollectionInput
  }

  export type UserCollectionUncheckedCreateWithoutCollectionInput = {
    id?: string
    description?: string | null
    name: string
    userId: string
    createdAt?: Date | string
    status?: boolean
    fatherId?: string | null
    childCollections?: UserCollectionUncheckedCreateNestedManyWithoutParentInput
    items?: UserItemUncheckedCreateNestedManyWithoutUserCollectionInput
  }

  export type UserCollectionCreateOrConnectWithoutCollectionInput = {
    where: UserCollectionWhereUniqueInput
    create: XOR<UserCollectionCreateWithoutCollectionInput, UserCollectionUncheckedCreateWithoutCollectionInput>
  }

  export type UserCollectionCreateManyCollectionInputEnvelope = {
    data: UserCollectionCreateManyCollectionInput | UserCollectionCreateManyCollectionInput[]
    skipDuplicates?: boolean
  }

  export type ItemCreateWithoutCollectionInput = {
    id: string
    model: string
    series?: string | null
    seriesNum?: string | null
    year: string
    status?: boolean
    image?: string | null
    createdAt?: Date | string
    typeModel: TypeModelCreateNestedOneWithoutItemsInput
    user?: UserCreateNestedOneWithoutItemsInput
    itemImages?: ItemImageCreateNestedManyWithoutItemInput
    userItem?: UserItemCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutCollectionInput = {
    id: string
    model: string
    series?: string | null
    seriesNum?: string | null
    year: string
    status?: boolean
    image?: string | null
    createdAt?: Date | string
    userId?: string | null
    typeModelId: number
    itemImages?: ItemImageUncheckedCreateNestedManyWithoutItemInput
    userItem?: UserItemUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutCollectionInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutCollectionInput, ItemUncheckedCreateWithoutCollectionInput>
  }

  export type ItemCreateManyCollectionInputEnvelope = {
    data: ItemCreateManyCollectionInput | ItemCreateManyCollectionInput[]
    skipDuplicates?: boolean
  }

  export type UserCollectionUpsertWithWhereUniqueWithoutCollectionInput = {
    where: UserCollectionWhereUniqueInput
    update: XOR<UserCollectionUpdateWithoutCollectionInput, UserCollectionUncheckedUpdateWithoutCollectionInput>
    create: XOR<UserCollectionCreateWithoutCollectionInput, UserCollectionUncheckedCreateWithoutCollectionInput>
  }

  export type UserCollectionUpdateWithWhereUniqueWithoutCollectionInput = {
    where: UserCollectionWhereUniqueInput
    data: XOR<UserCollectionUpdateWithoutCollectionInput, UserCollectionUncheckedUpdateWithoutCollectionInput>
  }

  export type UserCollectionUpdateManyWithWhereWithoutCollectionInput = {
    where: UserCollectionScalarWhereInput
    data: XOR<UserCollectionUpdateManyMutationInput, UserCollectionUncheckedUpdateManyWithoutCollectionInput>
  }

  export type ItemUpsertWithWhereUniqueWithoutCollectionInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutCollectionInput, ItemUncheckedUpdateWithoutCollectionInput>
    create: XOR<ItemCreateWithoutCollectionInput, ItemUncheckedCreateWithoutCollectionInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutCollectionInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutCollectionInput, ItemUncheckedUpdateWithoutCollectionInput>
  }

  export type ItemUpdateManyWithWhereWithoutCollectionInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutCollectionInput>
  }

  export type ItemCreateWithoutTypeModelInput = {
    id: string
    model: string
    series?: string | null
    seriesNum?: string | null
    year: string
    status?: boolean
    image?: string | null
    createdAt?: Date | string
    collection?: CollectionCreateNestedOneWithoutItemsInput
    user?: UserCreateNestedOneWithoutItemsInput
    itemImages?: ItemImageCreateNestedManyWithoutItemInput
    userItem?: UserItemCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutTypeModelInput = {
    id: string
    model: string
    series?: string | null
    seriesNum?: string | null
    year: string
    status?: boolean
    image?: string | null
    createdAt?: Date | string
    userId?: string | null
    collectionId?: number | null
    itemImages?: ItemImageUncheckedCreateNestedManyWithoutItemInput
    userItem?: UserItemUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutTypeModelInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutTypeModelInput, ItemUncheckedCreateWithoutTypeModelInput>
  }

  export type ItemCreateManyTypeModelInputEnvelope = {
    data: ItemCreateManyTypeModelInput | ItemCreateManyTypeModelInput[]
    skipDuplicates?: boolean
  }

  export type ItemUpsertWithWhereUniqueWithoutTypeModelInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutTypeModelInput, ItemUncheckedUpdateWithoutTypeModelInput>
    create: XOR<ItemCreateWithoutTypeModelInput, ItemUncheckedCreateWithoutTypeModelInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutTypeModelInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutTypeModelInput, ItemUncheckedUpdateWithoutTypeModelInput>
  }

  export type ItemUpdateManyWithWhereWithoutTypeModelInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutTypeModelInput>
  }

  export type CollectionCreateWithoutItemsInput = {
    id: number
    description: string
    collections?: UserCollectionCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutItemsInput = {
    id: number
    description: string
    collections?: UserCollectionUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutItemsInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutItemsInput, CollectionUncheckedCreateWithoutItemsInput>
  }

  export type TypeModelCreateWithoutItemsInput = {
    id: number
    description: string
  }

  export type TypeModelUncheckedCreateWithoutItemsInput = {
    id: number
    description: string
  }

  export type TypeModelCreateOrConnectWithoutItemsInput = {
    where: TypeModelWhereUniqueInput
    create: XOR<TypeModelCreateWithoutItemsInput, TypeModelUncheckedCreateWithoutItemsInput>
  }

  export type UserCreateWithoutItemsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    cpf?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    custumerId?: string | null
    isTwoFactorEnabled?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    userCollections?: UserCollectionCreateNestedManyWithoutUserInput
    twoFactorConfirmation?: TwoFactorConfirmationCreateNestedOneWithoutUserInput
    plan?: PlanCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutItemsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    cpf?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    planId?: string | null
    custumerId?: string | null
    isTwoFactorEnabled?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    userCollections?: UserCollectionUncheckedCreateNestedManyWithoutUserInput
    twoFactorConfirmation?: TwoFactorConfirmationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
  }

  export type ItemImageCreateWithoutItemInput = {
    id?: string
    fileName: string
    link: string
    principal?: boolean
    createdAt?: Date | string
    status?: boolean
  }

  export type ItemImageUncheckedCreateWithoutItemInput = {
    id?: string
    fileName: string
    link: string
    principal?: boolean
    createdAt?: Date | string
    status?: boolean
  }

  export type ItemImageCreateOrConnectWithoutItemInput = {
    where: ItemImageWhereUniqueInput
    create: XOR<ItemImageCreateWithoutItemInput, ItemImageUncheckedCreateWithoutItemInput>
  }

  export type ItemImageCreateManyItemInputEnvelope = {
    data: ItemImageCreateManyItemInput | ItemImageCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type UserItemCreateWithoutItemInput = {
    createdAt?: Date | string
    description?: string | null
    scale?: string | null
    name?: string | null
    userCollection?: UserCollectionCreateNestedOneWithoutItemsInput
    itemImages?: UserItemImageCreateNestedManyWithoutUserItemInput
  }

  export type UserItemUncheckedCreateWithoutItemInput = {
    createdAt?: Date | string
    description?: string | null
    scale?: string | null
    name?: string | null
    userCollectionId: string
    itemImages?: UserItemImageUncheckedCreateNestedManyWithoutUserItemInput
  }

  export type UserItemCreateOrConnectWithoutItemInput = {
    where: UserItemWhereUniqueInput
    create: XOR<UserItemCreateWithoutItemInput, UserItemUncheckedCreateWithoutItemInput>
  }

  export type UserItemCreateManyItemInputEnvelope = {
    data: UserItemCreateManyItemInput | UserItemCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type CollectionUpsertWithoutItemsInput = {
    update: XOR<CollectionUpdateWithoutItemsInput, CollectionUncheckedUpdateWithoutItemsInput>
    create: XOR<CollectionCreateWithoutItemsInput, CollectionUncheckedCreateWithoutItemsInput>
    where?: CollectionWhereInput
  }

  export type CollectionUpdateToOneWithWhereWithoutItemsInput = {
    where?: CollectionWhereInput
    data: XOR<CollectionUpdateWithoutItemsInput, CollectionUncheckedUpdateWithoutItemsInput>
  }

  export type CollectionUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    collections?: UserCollectionUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    collections?: UserCollectionUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type TypeModelUpsertWithoutItemsInput = {
    update: XOR<TypeModelUpdateWithoutItemsInput, TypeModelUncheckedUpdateWithoutItemsInput>
    create: XOR<TypeModelCreateWithoutItemsInput, TypeModelUncheckedCreateWithoutItemsInput>
    where?: TypeModelWhereInput
  }

  export type TypeModelUpdateToOneWithWhereWithoutItemsInput = {
    where?: TypeModelWhereInput
    data: XOR<TypeModelUpdateWithoutItemsInput, TypeModelUncheckedUpdateWithoutItemsInput>
  }

  export type TypeModelUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TypeModelUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutItemsInput = {
    update: XOR<UserUpdateWithoutItemsInput, UserUncheckedUpdateWithoutItemsInput>
    create: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutItemsInput, UserUncheckedUpdateWithoutItemsInput>
  }

  export type UserUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    custumerId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    userCollections?: UserCollectionUpdateManyWithoutUserNestedInput
    twoFactorConfirmation?: TwoFactorConfirmationUpdateOneWithoutUserNestedInput
    plan?: PlanUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    custumerId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    userCollections?: UserCollectionUncheckedUpdateManyWithoutUserNestedInput
    twoFactorConfirmation?: TwoFactorConfirmationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ItemImageUpsertWithWhereUniqueWithoutItemInput = {
    where: ItemImageWhereUniqueInput
    update: XOR<ItemImageUpdateWithoutItemInput, ItemImageUncheckedUpdateWithoutItemInput>
    create: XOR<ItemImageCreateWithoutItemInput, ItemImageUncheckedCreateWithoutItemInput>
  }

  export type ItemImageUpdateWithWhereUniqueWithoutItemInput = {
    where: ItemImageWhereUniqueInput
    data: XOR<ItemImageUpdateWithoutItemInput, ItemImageUncheckedUpdateWithoutItemInput>
  }

  export type ItemImageUpdateManyWithWhereWithoutItemInput = {
    where: ItemImageScalarWhereInput
    data: XOR<ItemImageUpdateManyMutationInput, ItemImageUncheckedUpdateManyWithoutItemInput>
  }

  export type ItemImageScalarWhereInput = {
    AND?: ItemImageScalarWhereInput | ItemImageScalarWhereInput[]
    OR?: ItemImageScalarWhereInput[]
    NOT?: ItemImageScalarWhereInput | ItemImageScalarWhereInput[]
    id?: StringFilter<"ItemImage"> | string
    itemId?: StringFilter<"ItemImage"> | string
    fileName?: StringFilter<"ItemImage"> | string
    link?: StringFilter<"ItemImage"> | string
    principal?: BoolFilter<"ItemImage"> | boolean
    createdAt?: DateTimeFilter<"ItemImage"> | Date | string
    status?: BoolFilter<"ItemImage"> | boolean
  }

  export type UserItemUpsertWithWhereUniqueWithoutItemInput = {
    where: UserItemWhereUniqueInput
    update: XOR<UserItemUpdateWithoutItemInput, UserItemUncheckedUpdateWithoutItemInput>
    create: XOR<UserItemCreateWithoutItemInput, UserItemUncheckedCreateWithoutItemInput>
  }

  export type UserItemUpdateWithWhereUniqueWithoutItemInput = {
    where: UserItemWhereUniqueInput
    data: XOR<UserItemUpdateWithoutItemInput, UserItemUncheckedUpdateWithoutItemInput>
  }

  export type UserItemUpdateManyWithWhereWithoutItemInput = {
    where: UserItemScalarWhereInput
    data: XOR<UserItemUpdateManyMutationInput, UserItemUncheckedUpdateManyWithoutItemInput>
  }

  export type UserItemScalarWhereInput = {
    AND?: UserItemScalarWhereInput | UserItemScalarWhereInput[]
    OR?: UserItemScalarWhereInput[]
    NOT?: UserItemScalarWhereInput | UserItemScalarWhereInput[]
    createdAt?: DateTimeFilter<"UserItem"> | Date | string
    description?: StringNullableFilter<"UserItem"> | string | null
    scale?: StringNullableFilter<"UserItem"> | string | null
    name?: StringNullableFilter<"UserItem"> | string | null
    itemId?: StringFilter<"UserItem"> | string
    userCollectionId?: StringFilter<"UserItem"> | string
  }

  export type ItemCreateWithoutItemImagesInput = {
    id: string
    model: string
    series?: string | null
    seriesNum?: string | null
    year: string
    status?: boolean
    image?: string | null
    createdAt?: Date | string
    collection?: CollectionCreateNestedOneWithoutItemsInput
    typeModel: TypeModelCreateNestedOneWithoutItemsInput
    user?: UserCreateNestedOneWithoutItemsInput
    userItem?: UserItemCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutItemImagesInput = {
    id: string
    model: string
    series?: string | null
    seriesNum?: string | null
    year: string
    status?: boolean
    image?: string | null
    createdAt?: Date | string
    userId?: string | null
    typeModelId: number
    collectionId?: number | null
    userItem?: UserItemUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutItemImagesInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutItemImagesInput, ItemUncheckedCreateWithoutItemImagesInput>
  }

  export type ItemUpsertWithoutItemImagesInput = {
    update: XOR<ItemUpdateWithoutItemImagesInput, ItemUncheckedUpdateWithoutItemImagesInput>
    create: XOR<ItemCreateWithoutItemImagesInput, ItemUncheckedCreateWithoutItemImagesInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutItemImagesInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutItemImagesInput, ItemUncheckedUpdateWithoutItemImagesInput>
  }

  export type ItemUpdateWithoutItemImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    series?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNum?: NullableStringFieldUpdateOperationsInput | string | null
    year?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: CollectionUpdateOneWithoutItemsNestedInput
    typeModel?: TypeModelUpdateOneRequiredWithoutItemsNestedInput
    user?: UserUpdateOneWithoutItemsNestedInput
    userItem?: UserItemUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutItemImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    series?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNum?: NullableStringFieldUpdateOperationsInput | string | null
    year?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    typeModelId?: IntFieldUpdateOperationsInput | number
    collectionId?: NullableIntFieldUpdateOperationsInput | number | null
    userItem?: UserItemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type UserCreateWithoutUserCollectionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    cpf?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    custumerId?: string | null
    isTwoFactorEnabled?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    items?: ItemCreateNestedManyWithoutUserInput
    twoFactorConfirmation?: TwoFactorConfirmationCreateNestedOneWithoutUserInput
    plan?: PlanCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutUserCollectionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    cpf?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    planId?: string | null
    custumerId?: string | null
    isTwoFactorEnabled?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    items?: ItemUncheckedCreateNestedManyWithoutUserInput
    twoFactorConfirmation?: TwoFactorConfirmationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserCollectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserCollectionsInput, UserUncheckedCreateWithoutUserCollectionsInput>
  }

  export type CollectionCreateWithoutCollectionsInput = {
    id: number
    description: string
    items?: ItemCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutCollectionsInput = {
    id: number
    description: string
    items?: ItemUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutCollectionsInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutCollectionsInput, CollectionUncheckedCreateWithoutCollectionsInput>
  }

  export type UserCollectionCreateWithoutChildCollectionsInput = {
    id?: string
    description?: string | null
    name: string
    createdAt?: Date | string
    status?: boolean
    user: UserCreateNestedOneWithoutUserCollectionsInput
    collection?: CollectionCreateNestedOneWithoutCollectionsInput
    parent?: UserCollectionCreateNestedOneWithoutChildCollectionsInput
    items?: UserItemCreateNestedManyWithoutUserCollectionInput
  }

  export type UserCollectionUncheckedCreateWithoutChildCollectionsInput = {
    id?: string
    description?: string | null
    name: string
    userId: string
    collectionId?: number | null
    createdAt?: Date | string
    status?: boolean
    fatherId?: string | null
    items?: UserItemUncheckedCreateNestedManyWithoutUserCollectionInput
  }

  export type UserCollectionCreateOrConnectWithoutChildCollectionsInput = {
    where: UserCollectionWhereUniqueInput
    create: XOR<UserCollectionCreateWithoutChildCollectionsInput, UserCollectionUncheckedCreateWithoutChildCollectionsInput>
  }

  export type UserCollectionCreateWithoutParentInput = {
    id?: string
    description?: string | null
    name: string
    createdAt?: Date | string
    status?: boolean
    user: UserCreateNestedOneWithoutUserCollectionsInput
    collection?: CollectionCreateNestedOneWithoutCollectionsInput
    childCollections?: UserCollectionCreateNestedManyWithoutParentInput
    items?: UserItemCreateNestedManyWithoutUserCollectionInput
  }

  export type UserCollectionUncheckedCreateWithoutParentInput = {
    id?: string
    description?: string | null
    name: string
    userId: string
    collectionId?: number | null
    createdAt?: Date | string
    status?: boolean
    childCollections?: UserCollectionUncheckedCreateNestedManyWithoutParentInput
    items?: UserItemUncheckedCreateNestedManyWithoutUserCollectionInput
  }

  export type UserCollectionCreateOrConnectWithoutParentInput = {
    where: UserCollectionWhereUniqueInput
    create: XOR<UserCollectionCreateWithoutParentInput, UserCollectionUncheckedCreateWithoutParentInput>
  }

  export type UserCollectionCreateManyParentInputEnvelope = {
    data: UserCollectionCreateManyParentInput | UserCollectionCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type UserItemCreateWithoutUserCollectionInput = {
    createdAt?: Date | string
    description?: string | null
    scale?: string | null
    name?: string | null
    item?: ItemCreateNestedOneWithoutUserItemInput
    itemImages?: UserItemImageCreateNestedManyWithoutUserItemInput
  }

  export type UserItemUncheckedCreateWithoutUserCollectionInput = {
    createdAt?: Date | string
    description?: string | null
    scale?: string | null
    name?: string | null
    itemId: string
    itemImages?: UserItemImageUncheckedCreateNestedManyWithoutUserItemInput
  }

  export type UserItemCreateOrConnectWithoutUserCollectionInput = {
    where: UserItemWhereUniqueInput
    create: XOR<UserItemCreateWithoutUserCollectionInput, UserItemUncheckedCreateWithoutUserCollectionInput>
  }

  export type UserItemCreateManyUserCollectionInputEnvelope = {
    data: UserItemCreateManyUserCollectionInput | UserItemCreateManyUserCollectionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutUserCollectionsInput = {
    update: XOR<UserUpdateWithoutUserCollectionsInput, UserUncheckedUpdateWithoutUserCollectionsInput>
    create: XOR<UserCreateWithoutUserCollectionsInput, UserUncheckedCreateWithoutUserCollectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserCollectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserCollectionsInput, UserUncheckedUpdateWithoutUserCollectionsInput>
  }

  export type UserUpdateWithoutUserCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    custumerId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    items?: ItemUpdateManyWithoutUserNestedInput
    twoFactorConfirmation?: TwoFactorConfirmationUpdateOneWithoutUserNestedInput
    plan?: PlanUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutUserCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    custumerId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    items?: ItemUncheckedUpdateManyWithoutUserNestedInput
    twoFactorConfirmation?: TwoFactorConfirmationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CollectionUpsertWithoutCollectionsInput = {
    update: XOR<CollectionUpdateWithoutCollectionsInput, CollectionUncheckedUpdateWithoutCollectionsInput>
    create: XOR<CollectionCreateWithoutCollectionsInput, CollectionUncheckedCreateWithoutCollectionsInput>
    where?: CollectionWhereInput
  }

  export type CollectionUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: CollectionWhereInput
    data: XOR<CollectionUpdateWithoutCollectionsInput, CollectionUncheckedUpdateWithoutCollectionsInput>
  }

  export type CollectionUpdateWithoutCollectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    items?: ItemUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutCollectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    items?: ItemUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type UserCollectionUpsertWithoutChildCollectionsInput = {
    update: XOR<UserCollectionUpdateWithoutChildCollectionsInput, UserCollectionUncheckedUpdateWithoutChildCollectionsInput>
    create: XOR<UserCollectionCreateWithoutChildCollectionsInput, UserCollectionUncheckedCreateWithoutChildCollectionsInput>
    where?: UserCollectionWhereInput
  }

  export type UserCollectionUpdateToOneWithWhereWithoutChildCollectionsInput = {
    where?: UserCollectionWhereInput
    data: XOR<UserCollectionUpdateWithoutChildCollectionsInput, UserCollectionUncheckedUpdateWithoutChildCollectionsInput>
  }

  export type UserCollectionUpdateWithoutChildCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserCollectionsNestedInput
    collection?: CollectionUpdateOneWithoutCollectionsNestedInput
    parent?: UserCollectionUpdateOneWithoutChildCollectionsNestedInput
    items?: UserItemUpdateManyWithoutUserCollectionNestedInput
  }

  export type UserCollectionUncheckedUpdateWithoutChildCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    collectionId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    items?: UserItemUncheckedUpdateManyWithoutUserCollectionNestedInput
  }

  export type UserCollectionUpsertWithWhereUniqueWithoutParentInput = {
    where: UserCollectionWhereUniqueInput
    update: XOR<UserCollectionUpdateWithoutParentInput, UserCollectionUncheckedUpdateWithoutParentInput>
    create: XOR<UserCollectionCreateWithoutParentInput, UserCollectionUncheckedCreateWithoutParentInput>
  }

  export type UserCollectionUpdateWithWhereUniqueWithoutParentInput = {
    where: UserCollectionWhereUniqueInput
    data: XOR<UserCollectionUpdateWithoutParentInput, UserCollectionUncheckedUpdateWithoutParentInput>
  }

  export type UserCollectionUpdateManyWithWhereWithoutParentInput = {
    where: UserCollectionScalarWhereInput
    data: XOR<UserCollectionUpdateManyMutationInput, UserCollectionUncheckedUpdateManyWithoutParentInput>
  }

  export type UserItemUpsertWithWhereUniqueWithoutUserCollectionInput = {
    where: UserItemWhereUniqueInput
    update: XOR<UserItemUpdateWithoutUserCollectionInput, UserItemUncheckedUpdateWithoutUserCollectionInput>
    create: XOR<UserItemCreateWithoutUserCollectionInput, UserItemUncheckedCreateWithoutUserCollectionInput>
  }

  export type UserItemUpdateWithWhereUniqueWithoutUserCollectionInput = {
    where: UserItemWhereUniqueInput
    data: XOR<UserItemUpdateWithoutUserCollectionInput, UserItemUncheckedUpdateWithoutUserCollectionInput>
  }

  export type UserItemUpdateManyWithWhereWithoutUserCollectionInput = {
    where: UserItemScalarWhereInput
    data: XOR<UserItemUpdateManyMutationInput, UserItemUncheckedUpdateManyWithoutUserCollectionInput>
  }

  export type UserCollectionCreateWithoutItemsInput = {
    id?: string
    description?: string | null
    name: string
    createdAt?: Date | string
    status?: boolean
    user: UserCreateNestedOneWithoutUserCollectionsInput
    collection?: CollectionCreateNestedOneWithoutCollectionsInput
    parent?: UserCollectionCreateNestedOneWithoutChildCollectionsInput
    childCollections?: UserCollectionCreateNestedManyWithoutParentInput
  }

  export type UserCollectionUncheckedCreateWithoutItemsInput = {
    id?: string
    description?: string | null
    name: string
    userId: string
    collectionId?: number | null
    createdAt?: Date | string
    status?: boolean
    fatherId?: string | null
    childCollections?: UserCollectionUncheckedCreateNestedManyWithoutParentInput
  }

  export type UserCollectionCreateOrConnectWithoutItemsInput = {
    where: UserCollectionWhereUniqueInput
    create: XOR<UserCollectionCreateWithoutItemsInput, UserCollectionUncheckedCreateWithoutItemsInput>
  }

  export type ItemCreateWithoutUserItemInput = {
    id: string
    model: string
    series?: string | null
    seriesNum?: string | null
    year: string
    status?: boolean
    image?: string | null
    createdAt?: Date | string
    collection?: CollectionCreateNestedOneWithoutItemsInput
    typeModel: TypeModelCreateNestedOneWithoutItemsInput
    user?: UserCreateNestedOneWithoutItemsInput
    itemImages?: ItemImageCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutUserItemInput = {
    id: string
    model: string
    series?: string | null
    seriesNum?: string | null
    year: string
    status?: boolean
    image?: string | null
    createdAt?: Date | string
    userId?: string | null
    typeModelId: number
    collectionId?: number | null
    itemImages?: ItemImageUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutUserItemInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutUserItemInput, ItemUncheckedCreateWithoutUserItemInput>
  }

  export type UserItemImageCreateWithoutUserItemInput = {
    id?: string
    link: string
    fileName: string
    principal?: boolean
    createdAt?: Date | string
    status?: boolean
  }

  export type UserItemImageUncheckedCreateWithoutUserItemInput = {
    id?: string
    link: string
    fileName: string
    principal?: boolean
    createdAt?: Date | string
    status?: boolean
  }

  export type UserItemImageCreateOrConnectWithoutUserItemInput = {
    where: UserItemImageWhereUniqueInput
    create: XOR<UserItemImageCreateWithoutUserItemInput, UserItemImageUncheckedCreateWithoutUserItemInput>
  }

  export type UserItemImageCreateManyUserItemInputEnvelope = {
    data: UserItemImageCreateManyUserItemInput | UserItemImageCreateManyUserItemInput[]
    skipDuplicates?: boolean
  }

  export type UserCollectionUpsertWithoutItemsInput = {
    update: XOR<UserCollectionUpdateWithoutItemsInput, UserCollectionUncheckedUpdateWithoutItemsInput>
    create: XOR<UserCollectionCreateWithoutItemsInput, UserCollectionUncheckedCreateWithoutItemsInput>
    where?: UserCollectionWhereInput
  }

  export type UserCollectionUpdateToOneWithWhereWithoutItemsInput = {
    where?: UserCollectionWhereInput
    data: XOR<UserCollectionUpdateWithoutItemsInput, UserCollectionUncheckedUpdateWithoutItemsInput>
  }

  export type UserCollectionUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserCollectionsNestedInput
    collection?: CollectionUpdateOneWithoutCollectionsNestedInput
    parent?: UserCollectionUpdateOneWithoutChildCollectionsNestedInput
    childCollections?: UserCollectionUpdateManyWithoutParentNestedInput
  }

  export type UserCollectionUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    collectionId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    childCollections?: UserCollectionUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ItemUpsertWithoutUserItemInput = {
    update: XOR<ItemUpdateWithoutUserItemInput, ItemUncheckedUpdateWithoutUserItemInput>
    create: XOR<ItemCreateWithoutUserItemInput, ItemUncheckedCreateWithoutUserItemInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutUserItemInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutUserItemInput, ItemUncheckedUpdateWithoutUserItemInput>
  }

  export type ItemUpdateWithoutUserItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    series?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNum?: NullableStringFieldUpdateOperationsInput | string | null
    year?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: CollectionUpdateOneWithoutItemsNestedInput
    typeModel?: TypeModelUpdateOneRequiredWithoutItemsNestedInput
    user?: UserUpdateOneWithoutItemsNestedInput
    itemImages?: ItemImageUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutUserItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    series?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNum?: NullableStringFieldUpdateOperationsInput | string | null
    year?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    typeModelId?: IntFieldUpdateOperationsInput | number
    collectionId?: NullableIntFieldUpdateOperationsInput | number | null
    itemImages?: ItemImageUncheckedUpdateManyWithoutItemNestedInput
  }

  export type UserItemImageUpsertWithWhereUniqueWithoutUserItemInput = {
    where: UserItemImageWhereUniqueInput
    update: XOR<UserItemImageUpdateWithoutUserItemInput, UserItemImageUncheckedUpdateWithoutUserItemInput>
    create: XOR<UserItemImageCreateWithoutUserItemInput, UserItemImageUncheckedCreateWithoutUserItemInput>
  }

  export type UserItemImageUpdateWithWhereUniqueWithoutUserItemInput = {
    where: UserItemImageWhereUniqueInput
    data: XOR<UserItemImageUpdateWithoutUserItemInput, UserItemImageUncheckedUpdateWithoutUserItemInput>
  }

  export type UserItemImageUpdateManyWithWhereWithoutUserItemInput = {
    where: UserItemImageScalarWhereInput
    data: XOR<UserItemImageUpdateManyMutationInput, UserItemImageUncheckedUpdateManyWithoutUserItemInput>
  }

  export type UserItemImageScalarWhereInput = {
    AND?: UserItemImageScalarWhereInput | UserItemImageScalarWhereInput[]
    OR?: UserItemImageScalarWhereInput[]
    NOT?: UserItemImageScalarWhereInput | UserItemImageScalarWhereInput[]
    id?: StringFilter<"UserItemImage"> | string
    itemId?: StringFilter<"UserItemImage"> | string
    userCollectionId?: StringFilter<"UserItemImage"> | string
    link?: StringFilter<"UserItemImage"> | string
    fileName?: StringFilter<"UserItemImage"> | string
    principal?: BoolFilter<"UserItemImage"> | boolean
    createdAt?: DateTimeFilter<"UserItemImage"> | Date | string
    status?: BoolFilter<"UserItemImage"> | boolean
  }

  export type UserItemCreateWithoutItemImagesInput = {
    createdAt?: Date | string
    description?: string | null
    scale?: string | null
    name?: string | null
    userCollection?: UserCollectionCreateNestedOneWithoutItemsInput
    item?: ItemCreateNestedOneWithoutUserItemInput
  }

  export type UserItemUncheckedCreateWithoutItemImagesInput = {
    createdAt?: Date | string
    description?: string | null
    scale?: string | null
    name?: string | null
    itemId: string
    userCollectionId: string
  }

  export type UserItemCreateOrConnectWithoutItemImagesInput = {
    where: UserItemWhereUniqueInput
    create: XOR<UserItemCreateWithoutItemImagesInput, UserItemUncheckedCreateWithoutItemImagesInput>
  }

  export type UserItemUpsertWithoutItemImagesInput = {
    update: XOR<UserItemUpdateWithoutItemImagesInput, UserItemUncheckedUpdateWithoutItemImagesInput>
    create: XOR<UserItemCreateWithoutItemImagesInput, UserItemUncheckedCreateWithoutItemImagesInput>
    where?: UserItemWhereInput
  }

  export type UserItemUpdateToOneWithWhereWithoutItemImagesInput = {
    where?: UserItemWhereInput
    data: XOR<UserItemUpdateWithoutItemImagesInput, UserItemUncheckedUpdateWithoutItemImagesInput>
  }

  export type UserItemUpdateWithoutItemImagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scale?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userCollection?: UserCollectionUpdateOneWithoutItemsNestedInput
    item?: ItemUpdateOneWithoutUserItemNestedInput
  }

  export type UserItemUncheckedUpdateWithoutItemImagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scale?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    itemId?: StringFieldUpdateOperationsInput | string
    userCollectionId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyPlanInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    cpf?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    custumerId?: string | null
    isTwoFactorEnabled?: boolean
  }

  export type UserUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    custumerId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    userCollections?: UserCollectionUpdateManyWithoutUserNestedInput
    items?: ItemUpdateManyWithoutUserNestedInput
    twoFactorConfirmation?: TwoFactorConfirmationUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    custumerId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    userCollections?: UserCollectionUncheckedUpdateManyWithoutUserNestedInput
    items?: ItemUncheckedUpdateManyWithoutUserNestedInput
    twoFactorConfirmation?: TwoFactorConfirmationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    custumerId?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type UserCollectionCreateManyUserInput = {
    id?: string
    description?: string | null
    name: string
    collectionId?: number | null
    createdAt?: Date | string
    status?: boolean
    fatherId?: string | null
  }

  export type ItemCreateManyUserInput = {
    id: string
    model: string
    series?: string | null
    seriesNum?: string | null
    year: string
    status?: boolean
    image?: string | null
    createdAt?: Date | string
    typeModelId: number
    collectionId?: number | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCollectionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    collection?: CollectionUpdateOneWithoutCollectionsNestedInput
    parent?: UserCollectionUpdateOneWithoutChildCollectionsNestedInput
    childCollections?: UserCollectionUpdateManyWithoutParentNestedInput
    items?: UserItemUpdateManyWithoutUserCollectionNestedInput
  }

  export type UserCollectionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    collectionId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    childCollections?: UserCollectionUncheckedUpdateManyWithoutParentNestedInput
    items?: UserItemUncheckedUpdateManyWithoutUserCollectionNestedInput
  }

  export type UserCollectionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    collectionId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    series?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNum?: NullableStringFieldUpdateOperationsInput | string | null
    year?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: CollectionUpdateOneWithoutItemsNestedInput
    typeModel?: TypeModelUpdateOneRequiredWithoutItemsNestedInput
    itemImages?: ItemImageUpdateManyWithoutItemNestedInput
    userItem?: UserItemUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    series?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNum?: NullableStringFieldUpdateOperationsInput | string | null
    year?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    typeModelId?: IntFieldUpdateOperationsInput | number
    collectionId?: NullableIntFieldUpdateOperationsInput | number | null
    itemImages?: ItemImageUncheckedUpdateManyWithoutItemNestedInput
    userItem?: UserItemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    series?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNum?: NullableStringFieldUpdateOperationsInput | string | null
    year?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    typeModelId?: IntFieldUpdateOperationsInput | number
    collectionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCollectionCreateManyCollectionInput = {
    id?: string
    description?: string | null
    name: string
    userId: string
    createdAt?: Date | string
    status?: boolean
    fatherId?: string | null
  }

  export type ItemCreateManyCollectionInput = {
    id: string
    model: string
    series?: string | null
    seriesNum?: string | null
    year: string
    status?: boolean
    image?: string | null
    createdAt?: Date | string
    userId?: string | null
    typeModelId: number
  }

  export type UserCollectionUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserCollectionsNestedInput
    parent?: UserCollectionUpdateOneWithoutChildCollectionsNestedInput
    childCollections?: UserCollectionUpdateManyWithoutParentNestedInput
    items?: UserItemUpdateManyWithoutUserCollectionNestedInput
  }

  export type UserCollectionUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
    childCollections?: UserCollectionUncheckedUpdateManyWithoutParentNestedInput
    items?: UserItemUncheckedUpdateManyWithoutUserCollectionNestedInput
  }

  export type UserCollectionUncheckedUpdateManyWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    fatherId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    series?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNum?: NullableStringFieldUpdateOperationsInput | string | null
    year?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    typeModel?: TypeModelUpdateOneRequiredWithoutItemsNestedInput
    user?: UserUpdateOneWithoutItemsNestedInput
    itemImages?: ItemImageUpdateManyWithoutItemNestedInput
    userItem?: UserItemUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    series?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNum?: NullableStringFieldUpdateOperationsInput | string | null
    year?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    typeModelId?: IntFieldUpdateOperationsInput | number
    itemImages?: ItemImageUncheckedUpdateManyWithoutItemNestedInput
    userItem?: UserItemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    series?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNum?: NullableStringFieldUpdateOperationsInput | string | null
    year?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    typeModelId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemCreateManyTypeModelInput = {
    id: string
    model: string
    series?: string | null
    seriesNum?: string | null
    year: string
    status?: boolean
    image?: string | null
    createdAt?: Date | string
    userId?: string | null
    collectionId?: number | null
  }

  export type ItemUpdateWithoutTypeModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    series?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNum?: NullableStringFieldUpdateOperationsInput | string | null
    year?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: CollectionUpdateOneWithoutItemsNestedInput
    user?: UserUpdateOneWithoutItemsNestedInput
    itemImages?: ItemImageUpdateManyWithoutItemNestedInput
    userItem?: UserItemUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutTypeModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    series?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNum?: NullableStringFieldUpdateOperationsInput | string | null
    year?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableIntFieldUpdateOperationsInput | number | null
    itemImages?: ItemImageUncheckedUpdateManyWithoutItemNestedInput
    userItem?: UserItemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutTypeModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    series?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNum?: NullableStringFieldUpdateOperationsInput | string | null
    year?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    collectionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ItemImageCreateManyItemInput = {
    id?: string
    fileName: string
    link: string
    principal?: boolean
    createdAt?: Date | string
    status?: boolean
  }

  export type UserItemCreateManyItemInput = {
    createdAt?: Date | string
    description?: string | null
    scale?: string | null
    name?: string | null
    userCollectionId: string
  }

  export type ItemImageUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    principal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ItemImageUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    principal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ItemImageUncheckedUpdateManyWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    principal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserItemUpdateWithoutItemInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scale?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userCollection?: UserCollectionUpdateOneWithoutItemsNestedInput
    itemImages?: UserItemImageUpdateManyWithoutUserItemNestedInput
  }

  export type UserItemUncheckedUpdateWithoutItemInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scale?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userCollectionId?: StringFieldUpdateOperationsInput | string
    itemImages?: UserItemImageUncheckedUpdateManyWithoutUserItemNestedInput
  }

  export type UserItemUncheckedUpdateManyWithoutItemInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scale?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    userCollectionId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCollectionCreateManyParentInput = {
    id?: string
    description?: string | null
    name: string
    userId: string
    collectionId?: number | null
    createdAt?: Date | string
    status?: boolean
  }

  export type UserItemCreateManyUserCollectionInput = {
    createdAt?: Date | string
    description?: string | null
    scale?: string | null
    name?: string | null
    itemId: string
  }

  export type UserCollectionUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserCollectionsNestedInput
    collection?: CollectionUpdateOneWithoutCollectionsNestedInput
    childCollections?: UserCollectionUpdateManyWithoutParentNestedInput
    items?: UserItemUpdateManyWithoutUserCollectionNestedInput
  }

  export type UserCollectionUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    collectionId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    childCollections?: UserCollectionUncheckedUpdateManyWithoutParentNestedInput
    items?: UserItemUncheckedUpdateManyWithoutUserCollectionNestedInput
  }

  export type UserCollectionUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    collectionId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserItemUpdateWithoutUserCollectionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scale?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    item?: ItemUpdateOneWithoutUserItemNestedInput
    itemImages?: UserItemImageUpdateManyWithoutUserItemNestedInput
  }

  export type UserItemUncheckedUpdateWithoutUserCollectionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scale?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    itemId?: StringFieldUpdateOperationsInput | string
    itemImages?: UserItemImageUncheckedUpdateManyWithoutUserItemNestedInput
  }

  export type UserItemUncheckedUpdateManyWithoutUserCollectionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scale?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type UserItemImageCreateManyUserItemInput = {
    id?: string
    link: string
    fileName: string
    principal?: boolean
    createdAt?: Date | string
    status?: boolean
  }

  export type UserItemImageUpdateWithoutUserItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    principal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserItemImageUncheckedUpdateWithoutUserItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    principal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserItemImageUncheckedUpdateManyWithoutUserItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    principal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PlanCountOutputTypeDefaultArgs instead
     */
    export type PlanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CollectionCountOutputTypeDefaultArgs instead
     */
    export type CollectionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CollectionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TypeModelCountOutputTypeDefaultArgs instead
     */
    export type TypeModelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TypeModelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemCountOutputTypeDefaultArgs instead
     */
    export type ItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCollectionCountOutputTypeDefaultArgs instead
     */
    export type UserCollectionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCollectionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserItemCountOutputTypeDefaultArgs instead
     */
    export type UserItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanDefaultArgs instead
     */
    export type PlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationTokenDefaultArgs instead
     */
    export type VerificationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PasswordResetTokenDefaultArgs instead
     */
    export type PasswordResetTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PasswordResetTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TwoFactorTokenDefaultArgs instead
     */
    export type TwoFactorTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TwoFactorTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TwoFactorConfirmationDefaultArgs instead
     */
    export type TwoFactorConfirmationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TwoFactorConfirmationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CollectionDefaultArgs instead
     */
    export type CollectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CollectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TypeModelDefaultArgs instead
     */
    export type TypeModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TypeModelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemDefaultArgs instead
     */
    export type ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemImageDefaultArgs instead
     */
    export type ItemImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCollectionDefaultArgs instead
     */
    export type UserCollectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCollectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserItemDefaultArgs instead
     */
    export type UserItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserItemImageDefaultArgs instead
     */
    export type UserItemImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserItemImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LogStripeWebhookDefaultArgs instead
     */
    export type LogStripeWebhookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LogStripeWebhookDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}