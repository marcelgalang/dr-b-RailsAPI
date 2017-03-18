import React, { Component } from 'react'

export default class Services extends Component {

    constructor(props) {

        super(props)

        this.state = {
            services: [],
            title: '',
            description: '',
            price:null
        }

        this.fetchServices = this.fetchServices.bind(this)
    }

    componentDidMount() {

        this.fetchServices()
    }

    fetchServices() {

        fetch('/api/services')
            .then(response => response.json())

            .then(data => this.setState({ services: data }))

    }

    render() {

        const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
            fetchServices: this.fetchServices
        }))

        const services = this.state.services.map((service) => (

            <div key={service.id}>
                <h1>{service.title}</h1>
                <p>
                    Description: {service.description} | Price: {service.price} |
                </p>
            </div>
        ))


        return (
            <div>
                <h1>Service Inventory</h1>

                {childrenWithProps || services}

            </div>
        )
    }
}
