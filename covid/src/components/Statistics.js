import useStats from "../hooks/useStats"

const Statistics = ({ url }) => {
  const { stats, loading } = useStats(url)
  if (loading) {
    return <li>please wait...</li>
  } else {
    return (
      <li>
        {stats?.confirmed ? (
          <span>{stats.confirmed.value}</span>
        ) : (
          <span>Not found</span>
        )}
        {/* {stats.recovered ? (
          <span>{stats.recovered.value}</span>
        ) : (
          <span>Not found</span>
        )}
        {stats.recovered && stats.confirmed && stats.deaths ? (
          <span>
            {stats.confirmed.value - stats.recovered.value - stats.deaths.value}
          </span>
        ) : (
          <span>Not found</span>
        )} */}
        {stats?.deaths ? (
          <span>{stats.deaths.value}</span>
        ) : (
          <span>Not found</span>
        )}
      </li>
    )
  }
}

export default Statistics
