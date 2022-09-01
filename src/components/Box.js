import React from 'react'

export default function Box(props) {
    let styles = ""
    styles = props.box.state ? "box-clicked" : ""


    return (
        <div
            className={"box " + styles}
            onClick={() => props.toggle(props.box.id)}>
        </div>
    )
}