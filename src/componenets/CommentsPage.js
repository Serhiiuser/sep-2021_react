const CommentsPage = ({item})=> {
    let {id,name,body}=item
    return (
        <div>
            {id}-{name}-{body}
        </div>
    );
}

export {CommentsPage} ;