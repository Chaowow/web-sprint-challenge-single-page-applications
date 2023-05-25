import React from "react"


const PizzaForm = (props) => {
    const { change, submit, value } = props;
    const { name, size, toppings, instructions } = value;

    const onChange = (e) => {
        const { name, value, checked, type } = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        if (type === 'checkbox') {
          const updatedToppings = checked
            ? [...toppings, value]
            : toppings.filter((topping) => topping !== value);
          change(name, updatedToppings);
        } else {
          change(name, newVal);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }
    return (
        <div>
            <h1>Pizza form</h1>
            <form onSubmit={onSubmit} id='pizza-form'>
                <label> Name &nbsp;
                    <input id='name-input'
                        type='text'
                        name='name'
                        value={name}
                        required minLength='2'
                        onChange={onChange}
                    />
                    <p className='error-message' id='name-error'>name must be at least 2 characters</p>
                </label> &nbsp;
                <label>
                    Choose Pizza Size:
                    <select id='size-dropdown' name='size' value={size} onChange={onChange}>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    </select>
                </label>
                <label> Pepperoni
                    <input 
                        type='checkbox'
                        name='toppings'
                        value='pepperoni'
                        checked={toppings.includes('pepperoni')}
                        onChange={onChange}
                    />
                </label>
                <label> Sausage
                    <input 
                        type='checkbox'
                        name='toppings'
                        value='sausage'
                        checked={toppings.includes('sausage')}
                        onChange={onChange}
                    />
                </label>
                <label> Beef
                    <input 
                        type='checkbox'
                        name='toppings'
                        value='beef'
                        checked={toppings.includes('beef')}
                        onChange={onChange}
                    />
                </label>
                <label> Chicken
                    <input 
                        type='checkbox'
                        name='toppings'
                        value='chicken'
                        checked={toppings.includes('chicken')}
                        onChange={onChange}
                    />
                </label>
                <label> Special Instructions
                    <input id='special-text'
                        type='text'
                        name='instructions'
                        value={instructions}
                        onChange={onChange}
                    />
                </label>
                <input type='submit' id='order-button'/>
            </form>
        </div>
    )
};

export default PizzaForm;