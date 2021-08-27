import Tender from "./Tender"


const Tenders = ({tenders, onDelete, onEdit}) => {
    return (
        <div>
            <h1 className="text-center mt-5">All Tenders</h1>
            {tenders.map((tender) => (
                <Tender key={tender.id} tender={tender} onDelete={onDelete} onEdit={onEdit}></Tender>
            ))}

        </div>
    )
}

export default Tenders

