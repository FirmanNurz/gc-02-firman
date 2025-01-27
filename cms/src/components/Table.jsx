import { Link } from "react-router";

export default function Table({ cuisines }) {
  const getSpicyIcon = (level) => {
    switch (level?.toLowerCase()) {
      case "high":
        return <span className="material-symbols-outlined text-danger">local_fire_department local_fire_department local_fire_department</span>;
      case "medium":
        return <span className="material-symbols-outlined text-warning">local_fire_department local_fire_department</span>;
      case "mild":
        return <span className="material-symbols-outlined text-success">local_fire_department</span>;
      default:
        return <span className="text-muted">-</span>;
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Spicy Level</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cuisines?.map((cuisine) => (
                <tr key={cuisine.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="material-symbols-outlined me-2">lunch_dining</span>
                      {cuisine.name}
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="material-symbols-outlined me-2">restaurant_menu</span>
                      {cuisine.category}
                    </div>
                  </td>
                  <td>Rp {cuisine.price?.toLocaleString()}</td>
                  <td>{getSpicyIcon(cuisine.spicyLevel)}</td>
                  <td>
                    <div className="btn-group">
                      <Link to={`/cuisines/${cuisine.id}`} className="btn btn-sm btn-outline-secondary">
                        <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                          visibility
                        </span>
                      </Link>
                      <Link to={`/cuisines/${cuisine.id}/edit`} className="btn btn-sm btn-outline-primary">
                        <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                          edit
                        </span>
                      </Link>
                      <Link to={`/cuisines/${cuisine.id}/upload`} className="btn btn-sm btn-outline-danger">
                        <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                          upload
                        </span>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
