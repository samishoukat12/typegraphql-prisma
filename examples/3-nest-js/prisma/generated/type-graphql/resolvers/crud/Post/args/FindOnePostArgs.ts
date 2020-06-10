import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindOnePostArgs {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, { nullable: false })
  where!: PostWhereUniqueInput;
}
