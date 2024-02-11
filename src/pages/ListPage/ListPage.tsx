import ErrorComponent from "src/components/ErrorComponent";
import ItemPost from "src/components/ItemPost";
import Loading from "src/components/Loading";
import { useFetchPosts } from "src/utils/hooks/useFetchPosts/useFetchPosts";
import style from "./ListPage.module.css";

const ListPage = () => {
    const { data, isError, isLoading } = useFetchPosts()

    if (isLoading) {
        return <Loading />
    }
    if (isError) {
        return <ErrorComponent />
    }
    return (
        <div
            data-testid="list-page"
            className={style.container}>
            {data.map(({ title, body, id }) =>
                <ItemPost
                    key={id}
                    title={title}
                    body={body} />
            )}
        </div>
    )
};

export default ListPage;
