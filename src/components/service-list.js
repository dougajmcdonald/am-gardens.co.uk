import React from "react"

const services = [
  {
    category: "Garden Maintenance",
    services: [
      "General Upkeep",
      "Grass Cutting",
      "Lawn Care",
      "Hedge Cutting & Topiary",
      "Planting",
      "Pruning"
    ]
  },
  {
    category: "Garden Design",
    services: [
      "Layout & Planning",
      "Soft Landscaping",
      "Cultivation",
      "Habitat Construction",
      "Ecological Consideration",
      "Turfing & Seeding"
    ]
  },
  {
    category: "Garden Clearance",
    services: ["Weeding", "Bed Preparation", "Spraying", "Green Waste Removal"]
  }
]
const ServiceList = () => (
  <div className="flex flex-row justify-between w-2/3">
    {services.map(serviceMap => (
      <article className="border-tertiary border-l-8 pl-8 mt-8">
        <h3 className="mt-1 mb-4">{serviceMap.category}</h3>
        <ul className="m-0 p-0">
          {serviceMap.services.map(service => (
            <li className="mt-1">{service}</li>
          ))}
        </ul>
      </article>
    ))}
  </div>
)

export default ServiceList
