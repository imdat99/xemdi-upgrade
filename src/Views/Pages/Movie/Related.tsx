import client, { Category, Country, MovieItem } from 'lib/client'
import React, { Fragment } from 'react'
import useSWR from 'swr'
import MovieListItem from 'Views/Components/Movie/MovieListItem'
interface RelatedProps {
    itemCategory?: Category
    itemCountry?: Country
    itemId?: string
}
const Related: React.FC<RelatedProps> = ({
    itemCategory,
    itemCountry,
    itemId,
}) => {
    const fetCher = () => {
        if (!itemCategory?.slug) return
        return client.v1ApiTheLoaiGet(
            itemCategory.slug,
            undefined,
            Math.random() * 4 < 2 ? itemCountry?.slug : undefined,
            undefined,
            Math.floor(Math.random() * 10) + 1
        )
    }
    const { data } = useSWR('related' + itemId, fetCher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateIfStale: false,
    })
    const items = React.useMemo(
        () =>
            (data?.data.items
                .slice(0, Math.floor(Math.random() * 10) + 7)
                .filter((item) => item._id !== itemId) || []) as MovieItem[],
        [data, itemId]
    )
    return (
        <div className="movie-list-body2 flex">
            {items.map((item, index) => (
                <Fragment key={index}>
                    <MovieListItem movieInfo={item} />
                </Fragment>
            ))}
        </div>
    )
}

export default Related
