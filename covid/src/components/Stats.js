import dayjs from "dayjs"
import useStats from "../hooks/useStats"

const Stats = ({ url }) => {
  const { stats, error, loading } = useStats(url)
  if (loading) {
    return <section>Loading...</section>
  } else {
    return (
      <section>
        <small>
          Imechapishwa:{" "}
          {stats?.lastUpdate ? (
            <span>
              {dayjs(stats.lastUpdate).format("MMMM DD, YYYY - HH:mm")}
            </span>
          ) : (
            ""
          )}
        </small>
        <div className="showcase">
          <div className="statBlock">
            <h3>Walioathirika</h3>
            {stats?.confirmed ? (
              <h2>{stats.confirmed.value}</h2>
            ) : (
              <h3>haijarekodiwa</h3>
            )}
          </div>
          {/* <div className="statBlock">
            <h3>Waliopona</h3>
            {stats?.recovered ? (
              <h2>{stats.recovered.value}</h2>
            ) : (
              <h3>haijarekodiwa</h3>
            )}
          </div> */}
          {/* <div className="statBlock">
            <h3>Walio Wagonjwa</h3>
            {stats?.recovered && stats?.confirmed && stats?.deaths ? (
              <h2>
                {stats.confirmed.value -
                  stats.recovered.value -
                  stats.deaths.value}
              </h2>
            ) : (
              <h3>haijarekodiwa</h3>
            )}
          </div> */}
          <div className="statBlock">
            <h3>Vifo</h3>
            {stats?.deaths ? (
              <h2>{stats.deaths.value}</h2>
            ) : (
              <h3>haijarekodiwa</h3>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default Stats
