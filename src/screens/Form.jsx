import { useState } from "react"
import { View, Text, TextInput, Alert, Button } from "react-native"
import CalendarPicker from "react-native-calendar-picker";

export default Form = () => {
    const initState = {name: '', email: '', birthday: null}
    const [form, setForm] = useState(initState)
    const validForm = () => {
        const Reg =  new RegExp('^[a-zA-Z]*$')
        console.log(form, !Reg.test(name))
        // name check
        const name = form.name
        if (!name || name.length > 49 || !Reg.test(name)) {
            alert('name not valid')
            return false
        }
        // mail check
        if (!form.email.includes('@') || !form.email.includes('.')) {
            alert('email not valid return')
            return false
        }
        //date check
        if (form.birthday > new Date() || !form.birthday) {
            alert('not valid date') 
            return false
        } 
    return true
    }
    const sendForm = () => {
        if (!validForm()) return
        Alert.alert('success', `name: ${form.name}\nemail: ${form.email}\nbirthday: ${form.birthday}`)
        setForm(initState)
    }

    return (
        <View>
            <Text style={{fontWeight: 'bold'}}>name</Text>
            <TextInput onChangeText={text => (setForm(prev => ({...prev, name: text})))} />
            <Text style={{fontWeight: 'bold'}}>email</Text>
            <TextInput
            keyboardType='email-address'
            onChangeText={text => (setForm(prev => ({...prev, email: text})))}/>
            <CalendarPicker onDateChange={date => setForm(prev => ({...prev, birthday: date}))} />
            <Button title="Submit" onPress={sendForm} />
        </View>
    )
}