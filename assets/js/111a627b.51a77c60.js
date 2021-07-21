(self.webpackChunktypegraphql_prisma_website=self.webpackChunktypegraphql_prisma_website||[]).push([[68],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},288:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=t(2122),o=t(9756),r=(t(7294),t(3905)),i={title:"Additional decorators for CRUD resolvers and Prisma classes and fields",sidebar_label:"Applying decorators",sidebar_position:9},l=void 0,s={unversionedId:"advanced/additional-decorators",id:"advanced/additional-decorators",isDocsHomePage:!1,title:"Additional decorators for CRUD resolvers and Prisma classes and fields",description:"Additional decorators for Prisma schema resolvers",source:"@site/../docs/advanced/additional-decorators.md",sourceDirName:"advanced",slug:"/advanced/additional-decorators",permalink:"/docs/advanced/additional-decorators",editUrl:"https://github.comichalLytek/typegraphql-prisma/edit/main/docs/../docs/advanced/additional-decorators.md",version:"current",sidebarPosition:9,frontMatter:{title:"Additional decorators for CRUD resolvers and Prisma classes and fields",sidebar_label:"Applying decorators",sidebar_position:9},sidebar:"docs",previous:{title:"Unchecked scalars input",permalink:"/docs/advanced/unchecked-scalars"},next:{title:"Prisma version check",permalink:"/docs/advanced/prisma-version"}},p=[],c={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"additional-decorators-for-prisma-schema-resolvers"},"Additional decorators for Prisma schema resolvers"),(0,r.kt)("p",null,"When you need to apply some decorators like ",(0,r.kt)("inlineCode",{parentName:"p"},"@Authorized"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@UseMiddleware")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@Extensions")," on the generated resolvers methods, you don't need to modify the generated source files."),(0,r.kt)("p",null,"To support this, ",(0,r.kt)("inlineCode",{parentName:"p"},"typegraphql-prisma")," generates two things: ",(0,r.kt)("inlineCode",{parentName:"p"},"applyResolversEnhanceMap")," function and a ",(0,r.kt)("inlineCode",{parentName:"p"},"ResolversEnhanceMap")," type. All you need to do is to create a config object, where you put the decorator functions (without ",(0,r.kt)("inlineCode",{parentName:"p"},"@"),") in an array, and then call that function with that config, eg.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  ResolversEnhanceMap,\n  applyResolversEnhanceMap,\n} from "@generated/type-graphql";\nimport { Authorized } from "type-graphql";\n\nconst resolversEnhanceMap: ResolversEnhanceMap = {\n  Category: {\n    createCategory: [Authorized(Role.ADMIN)],\n  },\n};\n\napplyResolversEnhanceMap(resolversEnhanceMap);\n')),(0,r.kt)("p",null,"This way, when you call ",(0,r.kt)("inlineCode",{parentName:"p"},"createCategory")," GraphQL mutation, it will trigger the ",(0,r.kt)("inlineCode",{parentName:"p"},"type-graphql")," ",(0,r.kt)("inlineCode",{parentName:"p"},"authChecker")," function, providing a ",(0,r.kt)("inlineCode",{parentName:"p"},"Role.ADMIN")," role, just like you would put the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Authorized")," on top of the resolver method."),(0,r.kt)("p",null,"Also, if you have a large schema and you need to provide plenty of decorators, you can split the config definition into multiple smaller objects placed in different files.\nTo accomplish this, just import the generic ",(0,r.kt)("inlineCode",{parentName:"p"},"ResolverActionsConfig")," type and define the resolvers config separately for every Prisma schema model, e.g:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  ResolversEnhanceMap,\n  ResolverActionsConfig,\n  applyResolversEnhanceMap,\n} from "@generated/type-graphql";\nimport { Authorized, Extensions } from "type-graphql";\n\n// define the decorators config using generic ResolverActionsConfig<TModelName> type\nconst categoryActionsConfig: ResolverActionsConfig<"Category"> = {\n  deleteCategory: [\n    Authorized(Role.ADMIN),\n    Extensions({ logMessage: "Danger zone", logLevel: LogLevel.WARN }),\n  ],\n};\nconst problemActionsConfig: ResolverActionsConfig<"Problem"> = {\n  createProblem: [Authorized()],\n};\n\n// join the actions config into a single resolvers enhance object\nconst resolversEnhanceMap: ResolversEnhanceMap = {\n  Category: categoryActionsConfig,\n  Problem: problemActionsConfig,\n};\n\n// apply the config (it will apply decorators on the resolver class methods)\napplyResolversEnhanceMap(resolversEnhanceMap);\n')),(0,r.kt)("p",null,"If you want to apply some decorators on all the methods of a model CRUD resolver, you can use the special ",(0,r.kt)("inlineCode",{parentName:"p"},"_all")," property to achieve that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"applyResolversEnhanceMap({\n  Client: {\n    _all: [Authorized()],\n  },\n});\n")),(0,r.kt)("h4",{id:"additional-decorators-for-prisma-schema-classes-and-fields"},"Additional decorators for Prisma schema classes and fields"),(0,r.kt)("p",null,"If you need to apply some decorators, like ",(0,r.kt)("inlineCode",{parentName:"p"},"@Authorized")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@Extensions"),", on the model ",(0,r.kt)("inlineCode",{parentName:"p"},"@ObjectType")," and its fields, you can use similar pattern as for the resolver actions described above."),(0,r.kt)("p",null,"All you need to do is to import ",(0,r.kt)("inlineCode",{parentName:"p"},"ModelsEnhanceMap")," type and ",(0,r.kt)("inlineCode",{parentName:"p"},"applyModelsEnhanceMap")," function, and then create a config object, where you put the decorator functions (without ",(0,r.kt)("inlineCode",{parentName:"p"},"@"),") in an array.\nIf you want to split the config definitions, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"ModelConfig")," type in the same way like ",(0,r.kt)("inlineCode",{parentName:"p"},"ResolverActionsConfig"),", e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  ResolversEnhanceMap,\n  ResolverActionsConfig,\n  applyResolversEnhanceMap,\n} from "@generated/type-graphql";\nimport { Authorized, Extensions } from "type-graphql";\n\n// define the decorators configs\nconst userEnhanceConfig: ModelConfig<"User"> = {\n  fields: {\n    email: [\n      Authorized(Role.ADMIN),\n      Extensions({ logMessage: "Danger zone", logLevel: LogLevel.WARN }),\n    ],\n  },\n};\nconst modelsEnhanceMap: ModelsEnhanceMap = {\n  User: userEnhanceConfig,\n  // or apply it inline\n  Recipe: {\n    class: [\n      // decorators for @ObjectType model class\n      Extensions({ logMessage: "Secret recipe", logLevel: LogLevel.INFO }),\n    ],\n    fields: {\n      // decorator for model class fields\n      averageRating: [Authorized()],\n    },\n  },\n};\n\n// apply the config (it will apply decorators on the model class and its properties)\napplyModelsEnhanceMap(modelsEnhanceMap);\n')),(0,r.kt)("p",null,"This way, you can apply some rules on single model or its fields, like ",(0,r.kt)("inlineCode",{parentName:"p"},"User.email")," visible only for Admin."),(0,r.kt)("p",null,"If you want to apply some decorators on all the fields of a model, you can use the special ",(0,r.kt)("inlineCode",{parentName:"p"},"_all")," property to achieve that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'applyModelsEnhanceMap({\n  User: {\n    fields: {\n      // all fields are protected against unauthorized access\n      _all: [Authorized()],\n      // this field  has additional decorators to apply\n      password: [\n        Extensions({ logMessage: "Danger zone", logLevel: LogLevel.WARN }),\n      ],\n    },\n  },\n});\n')),(0,r.kt)("p",null,"If you want to apply decorator to model's relation field, you need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"applyRelationResolversEnhanceMap")," function and ",(0,r.kt)("inlineCode",{parentName:"p"},"RelationResolverActionsConfig<TModel>")," type if you need to separate the configs. In order to apply some decorators on all the fields of a model, you can use the special ",(0,r.kt)("inlineCode",{parentName:"p"},"_all")," property to achieve that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const clientRelationEnhanceConfig: RelationResolverActionsConfig<"Client"> = {\n  posts: [\n    UseMiddleware((_data, next) => {\n      console.log("Client.posts relation field accessed");\n      return next();\n    }),\n  ],\n};\n\napplyRelationResolversEnhanceMap({\n  Client: clientRelationEnhanceConfig,\n  Product: {\n    fields: {\n      // all fields are protected against unauthorized access\n      _all: [Authorized()],\n    },\n  },\n});\n')),(0,r.kt)("p",null,"In case of other output types like ",(0,r.kt)("inlineCode",{parentName:"p"},"AggregateFooBar"),", you can use the same pattern but this time using the ",(0,r.kt)("inlineCode",{parentName:"p"},"applyOutputTypeEnhanceMap")," function and ",(0,r.kt)("inlineCode",{parentName:"p"},"OutputTypeConfig")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"OutputTypesEnhanceMap")," types:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const aggregateClientConfig: OutputTypeConfig<"AggregateClient"> = {\n  fields: {\n    avg: [Extensions({ complexity: 10 })],\n  },\n};\n\napplyOutputTypeEnhanceMap({\n  // separate config\n  AggregateClient: aggregateClientConfig,\n  // or an inline one\n  ClientAvgAggregate: {\n    fields: {\n      _all: [Extensions({ complexity: 10 })],\n      age: [Authorized()],\n    },\n  },\n});\n')),(0,r.kt)("p",null,"If you want to add decorators for input types or args classes, you can leverage ",(0,r.kt)("inlineCode",{parentName:"p"},"applyArgsTypesEnhanceMap")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"applyInputTypesEnhanceMap")," functions and use ",(0,r.kt)("inlineCode",{parentName:"p"},"ArgsTypesEnhanceMap"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ArgConfig<TArgsType>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"InputTypesEnhanceMap"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"InputTypeConfig<TInput>")," types if you want to split the definitions. The special ",(0,r.kt)("inlineCode",{parentName:"p"},"_all")," property also can apply the decorators to all the fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"applyArgsTypesEnhanceMap({\n  CreateProblemArgs: {\n    fields: {\n      data: [ValidateNested()],\n    },\n  },\n});\n\napplyInputTypesEnhanceMap({\n  ProblemCreateInput: {\n    fields: {\n      _all: [Allow()],\n      problemText: [MinLength(10)],\n    },\n  },\n});\n")),(0,r.kt)("p",null,"Be aware that in case of ",(0,r.kt)("inlineCode",{parentName:"p"},"class-validator")," you need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"@ValidateNested")," decorator to the args classes to trigger validation of the proper input types."))}d.isMDXComponent=!0}}]);