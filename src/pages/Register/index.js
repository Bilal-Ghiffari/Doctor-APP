import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, HookFormInput} from '../../components';
import {colors} from '../../utils';
import {useRegister} from './useRegister';

export default function Register({navigation}) {
  const {
    itemCategory,
    itemGender,
    onSubmit,
    control,
    handleSubmit,
    setSelectForm,
    selectForm,
  } = useRegister(navigation);
  return (
    <View style={styled.page}>
      <Header onPress={() => navigation.goBack()} />
      <View style={styled.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HookFormInput control={control} label="Full Name" name="fullName" />
          <Gap height={24} />
          <HookFormInput
            label="Kategori"
            value={selectForm.category}
            select
            selectItem={itemCategory}
            onValueChange={val => setSelectForm('category', val)}
          />
          <Gap height={24} />
          <HookFormInput
            control={control}
            label="Universitas"
            name="university"
          />
          <Gap height={24} />
          <HookFormInput
            control={control}
            label="Nomor STR"
            name="str_number"
          />
          <Gap height={24} />
          <HookFormInput
            control={control}
            label="Alamat Rumah Sakit"
            name="hospital_address"
          />
          <Gap height={24} />
          <HookFormInput
            label="Jenis Kelamin"
            value={selectForm.gender}
            select
            selectItem={itemGender}
            onValueChange={val => setSelectForm('gender', val)}
          />
          <Gap height={24} />
          <HookFormInput control={control} label="Email" name="email" />
          <Gap height={24} />
          <HookFormInput
            control={control}
            label="Password"
            name="password"
            secureTextEntry
          />
          <Gap height={40} />
          <Button title="Continue" onPress={handleSubmit(onSubmit)} />
          <Gap height={80} />
        </ScrollView>
      </View>
    </View>
  );
}

const styled = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
