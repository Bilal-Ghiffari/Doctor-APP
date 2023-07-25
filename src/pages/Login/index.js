import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, HookFormInput, Link} from '../../components';
import {colors, fonts} from '../../utils';
import {useLogin} from './useLogin';

export default function Login({navigation}) {
  const {onSubmit, handleSubmit, control} = useLogin(navigation);
  return (
    <View style={styled.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={40} />
        <ILLogo />
        <Text style={styled.title}>Masuk dan mulai berkonsultasi</Text>
        <HookFormInput control={control} name="email" label="Email Address" />
        <Gap height={25} />
        <HookFormInput
          control={control}
          name="password"
          label="Password"
          secureTextEntry
        />
        <Gap height={10} />
        <Link title="Forgot My Password" size={12} />
        <Gap height={40} />
        <Button title="Sign In" onPress={handleSubmit(onSubmit)} />
        <Gap height={30} />
        <Link
          onPress={() => navigation.navigate('Register')}
          title="Create New Account"
          size={16}
          align="center"
        />
      </ScrollView>
    </View>
  );
}

const styled = StyleSheet.create({
  page: {
    paddingHorizontal: 40,
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.secondary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
