export const Filter = ({ filter, setFilter, setSort }) => (
  <div className="filter">
        <h3>Filtrar:</h3>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="ALL">Todas</option>
                <option value="Completed">Completas</option>
                <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem Alfabética:</p>
                <button onClick={() => setSort("Asc")}>Asc</button>
                <button onClick={() => setSort("Desc")}>Desc</button>
            </div>
        </div>
    </div>
)