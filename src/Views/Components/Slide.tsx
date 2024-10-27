import ClientRender from 'Hocs/ClientRender'
import React from 'react'

interface SlideProps {
    trpe: string
}
const Slide = ClientRender<React.FC<SlideProps>>((props) => {
    const { trpe } = props
    return <div>Slide {trpe}</div>
})

export default Slide
