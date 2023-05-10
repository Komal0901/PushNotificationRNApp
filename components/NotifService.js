import React, { Component, useEffect, useState } from "react";
import PushNotification from "react-native-push-notification";
import { Text, View, TouchableOpacity, Button, StyleSheet, ScrollView } from "react-native";


// import { createNativeStackNavigator, Navigation } from "@react-navigation/native-stack";
// import { createNavigationContainer, NavigationActions } from "react-navigation";
// export default class NotifService extends Component {
//     componentDidMount() {
//         PushNotification.configure({
//             // (optional) Called when Token is generated (iOS and Android)
//             onRegister: function (token) {
//                 consol e.log("TOKEN:", token);
//             },

//             // (required) Called when a remote or local notification is opened or received
//             onNotification: function (notification) {
//                 console.log("NOTIFICATION:", notification);

//                 // process the notification here


//             },
//             // Android only
//             senderID: "440910886135",

//             popInitialNotification: true,
//             requestPermissions: true
//         });
//     }

//     render() {
//         return null;
//     }
// }



function NotifService({ navigation }) {


    useEffect(() => {
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function (token) {
                //console.log("TOKEN:", token);
            },

            // (required) Called when a remote is received or opened, or local notification is opened
            onNotification: function (notification) {
                console.log("NOTIFICATION:", notification);


                // process the notification

                // (required) Called when a remote is received or opened, or local notification is opened
                notification.finish(PushNotification);
            },

            // onOpenNotification: function () {
            //     console.log('notify', notify);
            //     if (notify.data.type && notify.data.type == 'profile') {
            //         Screen2.navigate('profile', { 'id': notify.data.id, 'name': notify.data.name })
            //     }

            // },

            // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
            onRegistrationError: function (err) {
                console.error(err.message, err);
            },

            // IOS ONLY (optional): default: all - Permissions to register.
            permissions: {
                alert: true,
                badge: true,
                sound: true,
            },

            // Should the initial notification be popped automatically
            // default: true
            popInitialNotification: true,

            /**
             * (optional) default: true
             * - Specified if permissions (ios) and token (android and ios) will requested or not,
             * - if not, you must call PushNotificationsHandler.requestPermissions() later
             * - if you are not using remote notification or do not have Firebase installed, use this:
             *     requestPermissions: Platform.OS === 'ios'
             */
            requestPermissions: Platform.OS === 'ios',
            requestPermissions: true,
        });
        PushNotification.createChannel({
            channelId: "2001",
            channelName: "reminder",
            channelDescription: 'My reminder'

        });

    })

    const sendNotification = () => {
        //alert("You have a notification");
        let notidata = {
            'data': {
                id: 7,
                type: 'profile',
                name: 'Komal',
            }
        }
        console.log(notidata)
        PushNotification.localNotification({
            channelId: "2001",
            title: "Greet message",
            message: "Good Morning Komal",


        })
    }

    const clearNotification = () => {
        PushNotification.removeAllDeliveredNotifications()
    }
    const repeate10 = () => {
        PushNotification.localNotificationSchedule({
            title: "Reminder💬",
            message: "You have to drink water💧",
            date: new Date(Date.now() + 1000), // first trigger in 1 secs
            channelId: '2001',
            repeatType: 'time',
            repeatTime: 5 * 1000 // repeats every 30 seconds (value has to be defined in miliseconds when the repeatType is 'time')
        });
    }
    const cancelAll = () => {
        alert("your all notification are cancelled🙅🏻‍♀️")
        PushNotification.cancelAllLocalNotifications();
    }
    return (

        <View >
            <View>
                <View>
                    <Text style={styles.Header}> Push Notification </Text>
                </View>
            </View>
            <ScrollView>
                <TouchableOpacity onPress={sendNotification}>
                    <View >
                        <Text style={styles.btn}>PushNotification</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={clearNotification}>
                    <View >
                        <Text style={styles.btn}>clearNotification</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={repeate10}>
                    <View >
                        <Text style={styles.btn}>Notification(every 5 sec)</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={cancelAll}>
                    <View >
                        <Text style={styles.btn}>Cancel All notification</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Screen2')}>
                    <View >
                        <Text style={styles.btn}>Navigate to screen2</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            {/* <CreateStack ref={(r) => { Screen2.setTopLevelNavigator(r) }} /> */}
        </View>
    );
}
const styles = StyleSheet.create({
    btn: {
        color: 'white',
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        margin: 30,
        textAlign: 'center',
        fontSize: 25
    },
    Header: { backgroundColor: '#eee', color: "#222", height: 100, padding: 12, fontSize: 30, textDecorationLine: 'underline' },


}
)
export default NotifService;