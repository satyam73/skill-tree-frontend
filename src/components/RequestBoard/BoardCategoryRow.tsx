type BoardCategoryRowTypes = {
    name: string;
};

export default function BoardCategoryRow({ name }: BoardCategoryRowTypes) {
    return <p className="text-base font-medium text-gray-800">{name}</p>;
}
