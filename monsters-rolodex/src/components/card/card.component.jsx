const Card = ({ monster: { name, email, id } }) => {
    return (
      <div key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
}

export default Card;