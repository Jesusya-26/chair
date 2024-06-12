import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

import { SearchCube } from '../icons'


export default function CatalogHeader() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Примерьте свой товар!</Text>
        <Text style={styles.subtitle}>Примерить свой товар примерить свой товар примерить свой товар</Text>
        <View style={styles.searchContainer}>
          <View
            style={
              clicked
                ? styles.searchBar__clicked
                : styles.searchBar__unclicked
            }
          >
            <SearchCube isActive={true} color="" size={24} />
            <TextInput
              style={styles.input}
              placeholder="Примерить свой товар"
              placeholderTextColor="#9199A3"
              value={searchPhrase}
              onChangeText={setSearchPhrase}
              onFocus={() => {
                setClicked(true);
              }}
            />
            {clicked && (
              <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
                  setSearchPhrase("")
              }}/>
            )}
          </View>
          {clicked && (
            <View>
              <Button
                title="Cancel"
                onPress={() => {
                  Keyboard.dismiss();
                  setClicked(false);
                }}
              ></Button>
            </View>
          )}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'SF-Bold',
    fontSize: 26,
    color: 'white',
    marginBottom: 5
  },
  subtitle: {
    fontFamily: 'SF-Regular',
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  searchContainer: {
    marginVertical: 15,
    marginHorizontal: 2,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "97%",
    marginBottom: 25,
  },
  searchBar__unclicked: {
    padding: 8,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#96C8FF",
    gap: 9,
    paddingLeft: 18,
  },
  searchBar__clicked: {
    padding: 8,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#96C8FF",
    gap: 9,
    paddingLeft: 18
  },
  input: {
    fontSize: 14,
    marginLeft: 8,
    width: "90%",
    fontFamily: 'SF-Regular',
    color: "#22292E"
  },
})
