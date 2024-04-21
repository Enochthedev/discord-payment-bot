import Category from "../enums/category";

export default interface IcommandOptions {
    name: string;
    description: string;
    category: Category;
    options: object;
    default_member_permission: bigint;
    dm_permission: boolean;
    cooldown: number;
}