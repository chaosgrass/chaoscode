import org.junit.Test;
import org.junit.Assert;

public class UtilsTest
{
@Test
public void add()
{
    Assert.assertTrue(3 == Utils.add(1, 2));
}
@Test
public void add1()
{
    Assert.assertTrue(3 <= Utils.add(2, 2));
}
}